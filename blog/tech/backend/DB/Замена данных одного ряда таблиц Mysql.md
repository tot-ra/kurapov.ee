---
title: Замена данных одного ряда таблиц Mysql
date: 2012-12-27T10:00
---

(копия статьи [Александра Макарова](http://rmcreative.ru/blog/post/mysql--replace-into-i-on-duplicate-key-update?utm_source=feedburner&utm_medium=feed&utm_campaign=Feed%3A+Rmcreative+%28RMCreative%29) )

В MySQL есть два расширения, которые позволяют атомарно вставить или обновить запись. Годятся они для штук с довольно высокой нагрузкой, когда без блокировок не работает типичный сценарий:

Выбрать запись. Если выбралась — обновить. Если пусто — вставить.

```sql
REPLACE INTO
  vote
SET
  user_id = 13,
  object_id = 42,
  value = 7
```



```sql
INSERT INTO
  vote
SET
  user_id = 13,
  object_id = 42,
  value = 7
ON DUPLICATE KEY UPDATE
  value = 7
```

 

Сходства

И то и то выражение в итоге даст примерно тот же результат. При нарушении ограничения на уникальность (то есть UNIQUE KEY или PRIMARY KEY) не будет никакой ошибки. Для ключа user_id, object_id в базе будет единственная запись с значением 7.

Отличия

Кроме очевидного отличия в синтаксисе есть и очень важно отличие в том, как всё это работает. REPLACE при срабатывании ограничения удаляет запись (и вызывает ON DELETE CASCADE) и затем вставляет новую, что не так быстро, как ON DUPLICATE KEY UPDATE, который обновляет запись без удаления.