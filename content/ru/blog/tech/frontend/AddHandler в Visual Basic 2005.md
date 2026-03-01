---
title: AddHandler в Visual Basic 2005
date: 2007-11-26T10:00
tags: [frontend]
---

С Visual Basic мне пришлось столкнуться [по учёбе](http://www.tud.ttu.ee/material/teo/IDK5210_Visuaalprogrammeerimine/Harjutused/Harjutus08.txt), и именно по невизуальной его части - создание элементов форм динамически (в цикле) с частично ограниченным числом оных элементов. Задание в общем звучит невинно - создать программу (автомобильного) теста.

Для упрощённого решения, все данные лежат в открытом виде в текстовом файле. Пользователю надо показать форму с вопросами. По умолчанию пользователь вводит сам ответ в TextBox компоненты, что даёт ему 3 очка за правильное решение. Если нажать на вопрос, то TextBox прячется и пользователь выбирает из предлагаемых вариантов.

Честно говоря самое сложное это вовсе не чтение из файла, а привязка создаваемых объектов с событиями (Events)

`Dim resFile As IO.StreamReader   Dim Row As String   Dim line As Integer   resFile = New IO.StreamReader("Valuutad.txt")   Do   line = line + 1   If resFile.EndOfStream Then Exit Do   Row = resFile.ReadLine   Me.AddQ(line, Row)   Loop   resFile.Close()`

Сначала я нашёл такой [кусок кода](http://visualbasic.about.com/b/2006/12/13/using-addhandler-and-addressof.htm) как AddHandler objLabel.Click, AddressOf Labelx_Click и решил что неплохо бы передать вместе с этим [параметры EventArgs](http://www.java2s.com/Tutorial/VB/0220__Event/SubclassEventArgstocreateyourowneventarguments.htm). Не тут то было, оказалось что VB делали такие перцы, логика которых с моей не совпадала вовсе, и которые наделали в VB тучу возможностей которыми я даже и не задумывался пользоваться..

Как оказалось, третьи примеры кода следовали всё тому же AddHandler, но уникальность того, что за кнопка из сотни кнопок была нажата брали из ActiveControl.Text! Это всё равно что баловаться фокусом в среде где фокус легко может отбираться или вообще не присваиваться, как это у меня с Label и происходило. Просто взять и добавить в объект новый параметр ID и по нему найти объект обратно, подобно getElementById в Javascript, тоже задача не из лёгких - надо тогда делать новый класс и наследовать контрол.. дебри.

Программу спас параметр Tag и занесение объектов в массив.

## Related

- [Datasync между браузерами](/ru/blog/tech/frontend/datasync-mezhdu-brauzerami/)
- [Drag-n-drop file upload](/ru/blog/tech/frontend/drag-n-drop-file-upload/)
- [Post form с window.open](/ru/blog/tech/frontend/post-form-s-windowopen/)
