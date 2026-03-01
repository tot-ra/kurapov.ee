---
title: Amazon S3 direct upload
date: 2016-03-01T10:00
tags: [backend]
---

вторник, 1 марта 2016 г. в 11:07:40

Amazon S3 [поддерживает](http://docs.aws.amazon.com/AmazonS3/latest/dev/RESTAuthentication.html) прямой upload. Делается всё просто со [сторонними библиотеками](https://github.com/uqee/angular-evaporate), особенно если у вас ангуляр

bower install evaporate angular-evaporate --save

Добавляете в настройках путь к серверной подписке, где с php [очень просто](https://github.com/carsonmcdonald/direct-browser-s3-upload-example) делается подпись:

echo base64_encode(hash_hmac('sha1', $_GET['to_sign'], AWS_SECRET, true));

Добавляете CORS-файл на S3, вбиваете в нужные места ключи — вот у вас готов аплоадер, поддерживающий multipart, параллельную загрузку файлов, необходимую для файлов в 100MB и выше

## Related

- [Alter sequence](/ru/blog/tech/backend/DB/postgres/alter-sequence/)
- [CUDA](/ru/blog/tech/backend/gpu/cuda/)
- [DB дизайн](/ru/blog/tech/backend/DB/db-dizayn/)
