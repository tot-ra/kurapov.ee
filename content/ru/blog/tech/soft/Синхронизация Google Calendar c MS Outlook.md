---
title: Синхронизация Google Calendar c MS Outlook
date: 2007-09-10T10:00
tags: [soft]
---

Синхронизируем Outlook и Google calendar. Самый недавно вышедший и простой способ - [Google Calendar Sync](http://googleblog.blogspot.com/2008/03/google-calendar-sync.html).

### Iframe

Для начала самый простой и не настоящий способ. Идём в Outlook под Calendar слайд, и под "My Calendars" жмём правой кнопкой по нужному календарю, ставим на нём Properties->Home Page->Address равным http://www.google.com/calendar/render. Браво, теперь у вас iframe вместо настоящего календарика.

### Plug-in RemoteCalendars

1. Закрываем Outlook
2. Устанавливаем [NET 2.0](http://www.microsoft.com/downloads/details.aspx?FamilyID=0856eacb-4362-4b0d-8edd-aab15c5e04f5&displaylang=en)
3. Устанавливаем [RemoteCalendars](http://remotecalendars.sourceforge.net/) (включая файлы O2003PIA.EXE, **O2003PIA.MSI,** **vstor.exe,** **RemoteCalendarsVSTOSetup.msi**)
4. Открываем Outlook, ставим во вдруг появившемся окошке настроек временную зону и Auto Update.
5. Видим такую панельку
6. Добавляем новый календарь. Для этого берём из Google Calendar настроек ссылку ![](http://www.google.com/calendar/images/ical.gif). После этого - вводим логин пароль, и вуаля - двусторонняя синхронизация есть.

Читайте также:

- [Синхронизация с мобильным телефоном](https://kurapov.ee/article/phone_synchronize/)

## Related

- [CVS и SVN](/ru/blog/tech/soft/cvs-i-svn/)
- [Unity3D](/ru/blog/tech/soft/unity3d/)
- [Как записывать экран с круглой камерой](/ru/blog/tech/soft/kak-zapisyvat-ekran-s-krugloy-kameroy/)
