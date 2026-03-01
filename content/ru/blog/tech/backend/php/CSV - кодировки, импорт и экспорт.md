---
title: CSV - кодировки, импорт и экспорт
date: 2008-05-30T10:00
tags: [php]
---

Comma Separated Values - типичный способ экспорта табличных данных, но далеко не стандартный в плане совместимости между Excel, php и другими источниками данных. Надо читать [RFC](http://tools.ietf.org/html/rfc4180), и пробовать всё на практике


Самое наглядное - если вы думали что данные достаточно через запятую перечислить, то если вы сохраните простой текстовый файл с такими данными:  

ID,name
1,Mac'duck

То в Excel получите

Тому несколько причин  

- Отсутсвие utf8
- Разные символы разделения данных (табы вместо запятых)
- Особые символы (", n , r) должны очищаться что-бы не побить линейную разметку
- fgetcsv()
- Данные лучше помещать в двойные кавычки, а сами двойные кавычки в данных эскейпятся повторением:  
    $value = str_replace('"', '""', $value);  
    $value = '"' . $value . '"' . ",";

### Mysql

```sql
SELECT id, name, email INTO OUTFILE '/tmp/result.csv'
FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"'
LINES TERMINATED BY 'n'
FROM users WHERE 1
```

   

### Экспорт

```php
header('Pragma: public');
header('Expires: 0');
header('Cache-Control: must-revalidate, post-check=0, pre-check=0');
header('Cache-Control: public');
header('Content-Description: File Transfer');
header('Content-Type: text/csv');
header('Content-Disposition: attachment; filename=SomeFile_' .time(). '.csv;');
header('Content-Transfer-Encoding: binary');
header('Content-Length: '.strlen($strCSV));

mb_internal_encoding("UTF-8");

$strCSV= chr(255) . chr(254) . mb_convert_encoding($strCSV, "UTF-16LE", "UTF-8");
```

   

### Импорт

uiyi

```php
$sCSVFileData = file_get_contents($aFile['tmp_name']);
if (mb_detect_encoding($sCSVFileData)) {
    $sCSVFileData = mb_convert_encoding(mb_substr($sCSVFileData, 2, mb_strlen($sCSVFileData)), "UTF-8", mb_detect_encoding($sCSVFileData));
}
else {
    $sCSVFileData = mb_convert_encoding(mb_substr($sCSVFileData, 2, mb_strlen($sCSVFileData)), "UTF-8", "UTF-16LE");
}

$aCSVLines = explode("rn", $sCSVFileData);

for ($i = 0; $i < count($aCSVLines); $i++) {
    if ($i > 0) {
        $arrData[] = getCSVValues($aCSVLines[$i], "t");
    }
}

function getCSVValues($sString, $sSeparator = ",") {
    $sString = str_replace('""', "'", $sString);
    $aBits = explode($sSeparator, $sString);
    $aElements = array();
    for ($i = 0; $i < count($aBits); $i++) {
        if (($i % 2) == 1) {
            $aElements[] = $aBits[$i];
        }
        else {
            $sRest = $aBits[$i];
            $sRest = preg_replace("/^" . $sSeparator . "/", "", $sRest);
            $sRest = preg_replace("/" . $sSeparator . "$/", "", $sRest);
            $aElements = array_merge($aElements, explode($sSeparator, $sRest));
        }
    }

    return $aElements;
}
```

## Related

- [Drupal 7](/ru/blog/tech/backend/php/drupal-7/)
- [Mysql import - export](/ru/blog/tech/backend/DB/mysql/mysql-import-export/)
- [Mysql prepared statements](/ru/blog/tech/backend/DB/mysql/mysql-prepared-statements/)
