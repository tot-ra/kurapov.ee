---
title: Alter sequence
date: 2007-11-29T10:00
---

Обычно в Postgre последовательности (sequence) обновляются естественно, но как и в случае с дупликатами, порой иногда хочется одним запросом восстановить правильный максимум .. Сначала я подумал что сработает обычный под-запрос типа

`ALTER SEQUENCE sysusers_id_seq RESTART SELECT MAX(id)+1 FROM sysusers ;` 

Но как оказалось, [последовательности обновлять](http://www.postgresql.org/docs/8.0/interactive/sql-altersequence.html) можно либо статичным рестартом, либо такой функцией.. 

`   SELECT setval('sysusers_id_seq', (select max(id)+1 from sysusers))+1;`

Теперь можно просто продублировать этот запрос для разных таблиц и последовательностей и беззаботно продолжать работу..