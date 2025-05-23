---
title: Задержанные (Deferred) jquery объекты
date: 2015-11-12T10:00
tags: [javascript]
---

Небольшой know-how.. javascript асинхронный как вы понимаете, а это налагает ряд ограничений и проблем. Например когда у вас несколько асинхронных запросов (т.е. вы незнаете когда они завершатся), а от всех их зависит последующая логика приложения, то обычное не-асинхронное приложение (например на php) решает это в лоб - последовательно выполняет операции и получается такая картинка..

```
//Backbone пример
Model1.fetch({success:function(){
    Model2.fetch({success:function(){
        Model3.fetch({success:function(){
            Model4.fetch({success:function(){
                Model5.fetch();
            }});
        }});
    }});
}});
```

Именно многопоточность даёт возможности ускорять backend на nodejs, масштабироваться на многоядерных процессорах, многомашинных обработках с map-reduce и тп. Для простого решения этой проблемы на frontend можно конечно написать костыль самому, но в jQuery уже есть Deferred объекты, с простым синтаксисом..

```
$.when(Model1.fetch(), Model2.fetch(), Model3.fetch(), Model4.fetch(), Model5.fetch()).then(
    function(){alert('success!');}
);
```

![](../img/Pasted%20image%2020241016183133.png)