---
title: Покрытие кода с PHPUnit и Selenium
date: 2013-03-20T10:00
tags: [tests]
---

Расширение [PHPUnit для Selenium](https://github.com/sebastianbergmann/phpunit-selenium) как оказывается умеет генерировать покрытие кода! Напомню, что сам по себе Selenium через браузер бегает по сайту, тогда как покрытие кода генерируется на сервере.

Это сразу написано в документации PHPUnit, но увы это не так просто настроить. В частности нужна поддержка XDebug.

Прежде всего ставим фреймворк через composer:

```
{
    "require-dev": {
        "phpunit/phpunit": "3.7.*",
        "phpunit/phpunit-selenium": "*"
    }
}
```

<!-- truncate -->

Теперь надо отключить встроенный старый загрузчик phpunit, указав путь к автозагрузчику composer..
![](../img/phpunit_unable_to_attach_test_framework_fix.png)

Cмотрим папку [SeleniumCommon](https://github.com/sebastianbergmann/phpunit-selenium/tree/master/PHPUnit/Extensions/SeleniumCommon) и в корень сервера копируем phpunit_coverage.php. Теперь URL к этому файлу надо поместить в класс теста как protected $coverageScriptUrl (см. скриншот выше). В нём надо изменить часть кода куда данные по покрытию будут складываться - PHPUNIT_COVERAGE_DATA_DIRECTORY. Эта папка должна иметь права на запись.

![](../img/Screen+Shot+2013-03-23+at+17.37.41.png)

Теперь в php.ini добавляем пути к append.php и prepend.php в директивы auto_append_file и auto_prepend_file что-бы каждый запуск php файла анализировался. В prepend.php тоже надо изменить PHPUNIT_COVERAGE_DATA_DIRECTORY

Тесты для Selenium у меня обычно с зависимостями, поэтому что-бы не создавать один громадный тест и разбираться в коде в случае его падения, я разбиваю его на части с аннотациями @depends.

Потом я отключаю перезапуск браузера используя сохранение сессии. Для обычных тестов это делается параметром **-browserSessionReuse** при запуске сервера. 

Но иногда хочется быстро тесты изменять с помощью браузерного IDE, поэтому я сохраняю тесты в html формате, а автоматизирую их запуск из phpunit с помощью runSelenese(). Тогда для сохранения сессий надо ещё добавить в bootstrap `PHPUnit_Extensions_SeleniumTestCase::shareSession(true);`

Тесты бегают, взаимозависимы, покрытие в PHPStorm наглядно, изменять просто.

## Related

- [Kohana](/ru/blog/тестирование/unit-testirovanie-v-kohana-32/)
- [Protractor](/ru/blog/тестирование/protractor/)
- [Изолированное UI тестирование с Protractor](/ru/blog/тестирование/izolirovannoe-ui-testirovanie-s-protractor/)
