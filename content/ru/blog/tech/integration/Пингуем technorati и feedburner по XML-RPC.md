---
title: Пингуем technorati и feedburner по XML-RPC
date: 2007-10-25T10:00
tags: [go, integration, php, tech]
---

Я уже писал [про XML-RPC](https://kurapov.ee/article/xml-rpc_and_livejournal/) и использование его с livejournal.

Месяца 4 назад я [зарегистрировался](http://technorati.com/people/technorati/totra) для продвижения блога наtechnorati - англоязычном аналоге [яндекс.блогов](http://blog.yandex.ru/), но обнаружил отсутсвие обновления. Как оказалось, всё дело в том что technorati пошло как раз по тому пути о котором я говорил чуть ранее про Google.

<!-- truncate -->

Technorati конечно имеет своих пауков, но обновление происходит пользователем. И что-бы не лазить каждый раз после добавления статьи я решил использовать немного изменённую функцию для движка b2 и всё ту же [библиотеку](http://phpxmlrpc.sourceforge.net/) для XML-RPC.

```php
function pingTechnorati() {  
require_once('xml-rpc/xmlrpc.inc');  
$siteurl=sys_url;  
$blogname=sys_title;  
  
$client = new xmlrpc_client("/rpc/ping", "rpc.technorati.com", 80);  
$message = new xmlrpcmsg("weblogUpdates.ping", array( new xmlrpcval($blogname), new xmlrpcval($siteurl)));  
$result = $client->send($message);  
  
if (!$result || $result->faultCode())  
return(false);  
  
return(true);  
}
```

В результате получаем - flerror0messageThanks for the ping, всё работает

Абсолютно такая же история и с feedburner - обновление происходит каждые 30 минут, но можно вручную пропинговать функцией

```php
function ping_feedburner() {  
require_once('xml-rpc/xmlrpc.inc');  
$siteurl=sys_url;  
$blogname=sys_title;  
  
$client = new xmlrpc_client("", "ping.feedburner.com", 80);  
$message = new xmlrpcmsg("weblogUpdates.ping", array(new xmlrpcval($blogname), new xmlrpcval($siteurl )));  
$result = $client->send($message);  
  
if (!$result || $result->faultCode())  
return(false);  
return(true);  
}
```

Теперь если вы заметили закономерность, то вам может стать интересно пинговать любой сервис, поэтому читайте так же..

- Как пингонуть [Яндекс.Блоги](http://nudnik.ru/entry/3436#comments)  
    
- [Как быстро попасть в Топ 100](http://www.habrahabr.ru/blog/blogosphere/11369.html) на Хабре  
    
- [Поддомены в apache](http://zliypes.com.ua/blog/2007/10/25/serveralias/) - наконец-то ценный пост от злого пса

А не по теме - вчера купил куртку в [reserved](http://www.re-reserved.com/), где кстати очень грамотно всё сделано - цены не слишком высокие как в monton, сразу женщина подошла и помогла выбрать, освещение, размещение, музыка - всё оптимально и не броско. Видел сегодня Андрея и [Катю](http://katjona.livejournal.com/profile), на работе переезд, а офис ещё не найден.

## Related

- [Авторизация в Google с OAuth 1.0](/ru/blog/tech/integration/avtorizatsiya-v-google-s-oauth-10/)
- [Авторизация в Twitter с OAuth 1.0](/ru/blog/tech/integration/avtorizatsiya-v-twitter-s-oauth-10/)
- [Swagger](/ru/blog/tech/integration/swagger/)
