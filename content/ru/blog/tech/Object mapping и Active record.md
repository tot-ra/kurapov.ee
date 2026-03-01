---
title: Object mapping и Active record
date: 2007-02-01T21:50
tags: [tech]
---

[ORM](http://en.wikipedia.org/wiki/Object-relational_mapping) (практически в коде известный как [Active record](http://en.wikipedia.org/wiki/Active_Record) ) - достаточно простой, но очень эффективный метод соединения принципов объектно-ориентированного программирования с базой данных.

<!-- truncate -->

### Полёт мысли  

Вначале был класс абстрагирующийся от базы данных. Объект такого класса позволяет не только использовать функцию типа sql(), но и всевозможные getlist или getrecord возвращяющие массив или объект данных - всё на важ вкус. Потом нужная нам таблица становится объектом, унаследовавшим класс абстракции БД.  
В зависимости от развитости системы, объекты-таблицы могут также воссоздавать связи между собой по Foreign key.

### Что это даёт

На практике получается так, что например для того что-бы найти нужную статью по ID, можно написать

`$recordArticle=$table_article->find( $_GET['ID'] );`

Для более изощрённых вариантов существуют и функции возвращающие массив статей, добавляющие новую статью, обновляющие данные определённой статьи. Объектность данных способствует более простой работе с данными..

`$recordComment=arr2obj($_POST, 'myprefix_' );   $table_article->insert($recordComment);`

## Related

- [20 типичных уязвимостей в коде](/ru/blog/tech/security/20-tipichnyh-uyazvimostey-v-kode/)
- [Alter sequence](/ru/blog/tech/backend/DB/postgres/alter-sequence/)
- [Backend-авторизация в facebook через OAuth 2.0](/ru/blog/tech/integration/backend-avtorizatsiya-v-facebook-cherez-oauth-20/)
