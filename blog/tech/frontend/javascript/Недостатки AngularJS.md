---
title: Недостатки AngularJS
date: 2014-04-04T10:00
tags: [javascript]
---

Я уже несколько месяцев работаю с AngularJS и после [Backbone](http://kurapov.name/rus/technology/ui/js/backbone_js)/jQuery впечатления неоднородные

### Framework

Рамки (frames) всегда **ограничивают**. С Backbone и jQuery можно было писать код, который хочешь, где главное что-бы он работал. С Angular надо глубоко влазить в дебри настроек что-бы всё было по правилам. Это хорошо что приложение следует правилам. Плохо что документации слишком много. Почитайте описания [ui-router](https://github.com/angular-ui/ui-router/wiki/URL-Routing) или [binding у директив](http://docs.angularjs.org/guide/directive)!

### Программирование декларативное

Код связывающий DOM с логикой переместился полностью в html. Селекторы в стиле jquery практически не нужны. Это серьёзно ограничивает используемость фреймворка с существующими скриптами и работающими системами. Попытка соединить два мира и использовать из ng-контроллера каких-то jquery событий будет выглядеть как хак.

Все события вешаются на самом элементе. Это в чём-то хорошо (меньше кода в js), но с другой стороны это распыляет видимость всего приложения и сильней привязывает html к логике. Например теперь проще делать показывание элементов с ng-show, но когда у вас на элементе висит ng-class, ng-src, ng-repeat, ng-click и ещё с десяток директив, в том числе самописных, то становится уже сложно не то что **читать html**, но и понять состояния к которым элемент может прийти или порядок вызова событий.

<iframe width="934" height="350" src="https://www.youtube.com/embed/HCR7i5F5L8c" title="Google I/O 2013 - Design Decisions in AngularJS" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


### Проблема с bindингом моделей

Проблема обновления DOM никуда не пропала. Модели это обычные объекты в которых спрятан параметр $$hashKey, по которому и привязывается двустороннее обновление DOM. Проблема в том что своей логикой вы можете модели поломать так, что они лишатся этого ключа и тогда DOM останется жить своей жизнью, а вы не заметите этого. Такой баг отловить сложней всего.

Чаще всего потеря случается из-за того что у вас есть локальный кэш данных в памяти (модель), который асинхронно обновляется через $http, но вы используете **присваивание** для обновления.

Например - в контроллере вы привязали view к кешированным данным из сервиса

```
$scope.user = UserService.getUser();
UserService.updateCache();
```

  

Если ваш сервис будет просто перезаписывать внутреннюю переменную, то это не обновит view.  

```
UserService = ['$http',
    function($http){
        var _localUserCache;
        return{
            updateCache:function(){
                $http.get('user').then(function(response){
                    _localUserCache = response.user;
                });
            },
            getUser: function(){
                return _localUserCache;
            }
        }
    }
]
```

Это из-за того, что в [javascript данные передаются по ссылке](http://stackoverflow.com/questions/13104494/does-javascript-pass-by-reference) (by reference), но если вы присваиваете новое значение, то старое значение (которое присвоено во view) в памяти то останется, но создадутся и новые данные. Поэтому правильно использовать angular.copy:  

angular.copy(response.user, _localUserCache);

Второй частый источник батхёрта с bindом - удаление элементов из коллекций. Их надо делать с помощью array.slice(i), а не с присваиванием undefined или delete ключевым словом

### Escaping и кавычки

Escaping в ангуляре встроен - вы не можете из фильтра просто так выплюнуть HTML. Это с точки зрения безопасности хорошо, но с другой стороны - долпонительная проблема. Надо использовать $sce.trustAsHtml(). Но я даже не на это жалуюсь..

Допустим у вас есть [переводы](http://angular-translate.github.io/docs/#/guide/06_variable-replacement) как фильтр. Вы хотите в переводы вставить ссылку.. то как вы её передадите? 

```
{
'text_with_link':"<a ng-click='$state.go(\"app.dosomething\")'>click me!</a>",
'text_with_vars:"{{start_tag}}clickme!{{end_tag}}"
}
```

Замечаете escaping кавычек? А это внешний, чистый JSON. В общем случае escapingа кавычек внутри реального HTML - беда. Т.е. я себе представляю это так.. но на самом деле оно работать не будет:

```
<div ng-bind-html="'text_with_link' | translate: '{start_tag:\"<a ng-click=\'$state.go(\\"app.dosomething\\")\'>\"}'"></div>
```

Наконец Angular никак не развивает язык программирования ради языка. Вам не нужны классы, прототипы, иерархии, наследования, публичные-приватные методы. Подключи зависимости, внедри scope и нужные сервисы и пиши контроллер. Это своего рода деградация ради эффективности.  

Из плюсов - мне понравились директивы. То что ты можешь определить визуально изолированный элемент как кирпичик даёт удобство для компоновки всяких wysiwyg, комбобоксов, календариков и тп. Понравилась магия с автообновлением view-моделей, с [переводом](http://angular-translate.github.io/) на лету и с dependency-injection компонентов просто по имени сервиса.