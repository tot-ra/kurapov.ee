---
title: Mysql import - export
date: 2007-01-29T10:00
tags: [backend, mysql, php, tech]
---

Экспорт БД через shell

`mysqldump -uroot -ppass base > dump.sql`

Импортировать данные из sql файла в mysql как известно можно несколькими путями.

Первый вариант - закачать файл и через консоль обратится напрямую к демону для импорта`mysql -uroot -ppass base < dump.sql`

Второй вариант естественно phpmyadmin, но он подходит лишь для небольших данных. Если база более 10 мб, то возникает проблема с загрузкой таких больших данных через браузер.

Третий вариант иногда реализовался в phpmyadmin - чтение sql файла по частям. Очень советую испробовать [BigDump](http://www.ozerov.de/bigdump.php).  

При переносе данных учитывайте что переносимые данные будут в местном часовом поясе и вам может понадобится либо конвертирование данных, либо ручная установка временной зоны  

`select timediff(now(),convert_tz(now(),@@session.time_zone,'+00:00'));`

## Related

- [Mysql prepared statements](/ru/blog/tech/backend/DB/mysql/mysql-prepared-statements/)
- [Mysql rownum](/ru/blog/tech/backend/DB/mysql/mysql-rownum/)
- [Random order в Postgres](/ru/blog/tech/backend/DB/postgres/random-order-v-postgre/)
