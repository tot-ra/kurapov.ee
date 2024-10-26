среда, 13 февраля 2008 г. в 09:12:18

[RMI](http://java.sun.com/javase/technologies/core/basic/rmi/index.jsp) - техника сериализации в объектов в Java для передачи их по сети, своего рода аналог RPC. Сериализация как известно это конвертирование абстрактных типов данных (классов) в виде строк. В отличие от RPC, где явно указывается вызов удалённого метода, в RMI это выглядит более "естественно", хотя методы тоже вызываются на удалённой машине.

Не все объекты можно сериализовать - всевозможные handler'ы это ведь ссылки на процессы которые зависят от конкретной машины, в целом для этого есть библиотека java.io.Serializable. Протокол для передачи используется JRMP либо CORBA-совместимый RMI-IIOP.

Таким образом RMI используется вместо web-сервисов в формате XML и WSDL, но только если на обоих машинах работает Java-платформа, подобно технологии COM от Microsoft. Плюс такой технологии в более высокой скорости и автоматизации вызовов методов, тогда как в web-сервисах  трансформация в XML занимает больше времени. Вообще об этом я узнал на практикуме по **Web services and internet solutions architecture** ([IDU0080](http://www.tud.ttu.ee/material/enn/IDU0080/)) в ТТУ. Прилагаю пример, где сервер передаёт объект "book" клиентской машине. Для этого используется библиотека java.rmi.*

В примере передаётся объект класса book, которая должна быть сериализируемой, поэтому мы используем ключевое слово implements:  
`public class book implements java.io.Serializable`  
Затем создаём интерфейс для передачи книг  
`public interface bookstore extends java.rmi.Remote`  
И наконец создаём сервер с этим интерфейсом`public class BookStoreServer implements bookstore{   public static void main(String[] args) throws Exception{   LocateRegistry.createRegistry(1099); //используем порт   }}`