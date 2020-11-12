## Observer Pattern

Define a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically.

Observer Pattern là một trong những Pattern thuộc nhóm hành vi (Behavior Pattern). Nó định nghĩa mối phụ thuộc một – nhiều giữa các đối tượng để khi mà một đối tượng có sự thay đổi trạng thái, tất các thành phần phụ thuộc của nó sẽ được thông báo và cập nhật một cách tự động.

Observer có thể đăng ký với hệ thống. Khi hệ thống có sự thay đổi, hệ thống sẽ thông báo cho Observer biết. Khi không cần nữa, mẫu Observer sẽ được gỡ khỏi hệ thống.

Các thành phần tham gia Observer Pattern:

Subject : chứa danh sách các observer,  cung cấp phương thức để có thể thêm và loại bỏ observer.
Observer : định nghĩa một phương thức update() cho các đối tượng sẽ được subject thông báo đến khi có sự thay đổi trạng thái.
ConcreteSubject : cài đặt các phương thức của Subject, lưu trữ trạng thái danh sách các ConcreateObserver, gửi thông báo đến các observer của nó khi có sự thay đổi trạng thái.
ConcreteObserver : cài đặt các phương thức của Observer, lưu trữ trạng thái của subject, thực thi việc cập nhật để giữ cho trạng thái đồng nhất với subject gửi thông báo đến.
Sự tương tác giữa subject và các observer như sau: mỗi khi subject có sự thay đổi trạng thái, nó sẽ duyệt qua danh sách các observer của nó và gọi phương thức cập nhật trạng thái ở từng observer, có thể truyền chính nó vào phương thức để các observer có thể lấy ra trạng thái của nó và xử lý.

[Ref](https://gpcoder.com/4747-huong-dan-java-design-pattern-observer/)

## Observer Design Pattern
Observer design pattern is a behavioural design pattern which is a subscription system which notifies multiple objects
about any changes to the object they are observing.

▶️ The cool thing about observer pattern is that it decouples the State from the actual business logic. in terms of UIs
you can separate the State from the actual rendering of the UI and if that State updates the UI will automatically react
to it.

Suppose you have a some Todos in your state you can decouple the data from the Ui and implement the render logic
entirely differently. You can have a DOMRenderer and a ConsoleRenderer and both will react and update to the changes
made to the Todos.


### Real world Analogy
You can compare Observer pattern with daily newspaper subscriptions, If you subscribe to any newspaper you don't need to
go to the store everyday and get the newspaper instead the Publisher sends the newspaper to your home.

Another analogy would be Youtube, well you might know pretty well that subscribing to youtube channels means you will
get notification about new videos. Observer pattern also works the same. you as a user will subscribe to events you
choose to get notifications.

### Use Cases
Observer pattern has lot of use cases. (a lot) Vuejs's Reactivity system relies on Observer pattern. The whole idea of
RxJs is based upon observers. MobX also uses Observer design pattern effectively.

From User Interfaces to Data Reactivity, Observer pattern is really handy when some changes/events in a particular
object has to be reflected on other objects


---
# Observer

## Overview

This pattern suggests, that you have a subject and some observers. Every time you update your subject state, observers get notified about it. This pattern is very handy when you need to tie several objects to each other with abstraction and freedom of implementation. Also, this pattern is a key part of the familiar model-view-controller (MVC) architectural pattern. Strongly used in almost every GUI library.

## Usage

You have a basic Subject class, which has 3 methods: attach, detach, notify and a list of observers, which had implemented the Observer interface. Observer - it’s an interface, which has only one method - update(). You add observers by attach(), remove them by detach(), and by notify() - calling method update() in each of them.



[Ref](https://www.netguru.com/codestories/top-5-most-used-patterns-in-oop-with-typescript)