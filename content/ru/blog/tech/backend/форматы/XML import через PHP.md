---
title: XML import через PHP
date: 2007-01-30T10:00
tags: [форматы]
---

XML создан для многих целей, одна из которых - удобство в переносимости данных из одной программы в другую. Особенно удобно создавать parser на этой основе. После простейшего парсинга, структура xml становится некоторым множеством переменных (массивом или объектом), а данные xml - значением этих переменных.

Увы для полноценного универсального xml парсера нужен большой и сложный объект, где обязательна присутсвовать рекурсия что-бы стало доступно всё богатсво этого стандарта.

Но для простейших файлов можно воспользоваться такой функцией.. 

```php
/**  
 * Simple xml parsing function  
 * doesnt understand selfending tags like  
 *  
 * @param string $text  
 * @return array  
 */  
function xml2array($text) {  
   $reg_exp = '/<(.*?)>(.*?)/';  
   preg_match_all($reg_exp, $text, $match);  
	 
   foreach ($match[1] as $key=>$val) {  
	   if ( preg_match($reg_exp, $match[2][$key]) ) {  
		   $array[$val][] = $this->xml2array($match[2][$key]);  
	   } else {  
		   $array[$val] = $match[2][$key];  
	   }  
   }  
   return $array;  
}
```

Не забывайте правда и о том, что рекурсия вызывает нехилую нагрузку на память и xml-файл в 400 кб может спокойно разрастись и перейти лимит в 10 мб, отведённый по умолчанию под php-процесс.  
  
`ini_set('memory_limit','30M');`

## Related

- [Microsoft Word 2003 XML](/ru/blog/tech/backend/форматы/microsoft-word-2003-xml/)
- [RSS generator](/ru/blog/tech/backend/форматы/rss-generator/)
- [RSS2.0](/ru/blog/tech/backend/форматы/rss20/)
