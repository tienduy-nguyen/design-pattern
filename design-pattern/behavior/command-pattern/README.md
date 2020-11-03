## Command Pattern

Command Pattern là một trong những Pattern thuộc nhóm hành vi (Behavior Pattern). Nó cho phép chuyển yêu cầu thành đối tượng độc lập, có thể được sử dụng để tham số hóa các đối tượng với các yêu cầu khác nhau như log, queue (undo/redo), transtraction.

Nói cho dễ hiểu, Command Pattern cho phép tất cả những Request gửi đến object được lưu trữ trong chính object đó dưới dạng một object Command. Khái niệm Command Object giống như một class trung gian được tạo ra để lưu trữ các câu lệnh và trạng thái của object tại một thời điểm nào đó.

Command dịch ra nghĩa là ra lệnh. Commander nghĩa là chỉ huy, người này không làm mà chỉ ra lệnh cho người khác làm. Như vậy, phải có người nhận lệnh và thi hành lệnh. Người ra lệnh cần cung cấp một class đóng gói những mệnh lệnh. Người nhận mệnh lệnh cần phân biệt những interface nào để thực hiện đúng mệnh lệnh.

Command Pattern còn được biết đến như là Action hoặc Transaction.


Các thành phần tham gia trong Command Pattern:

Command : là một interface hoặc abstract class, chứa một phương thức trừu tượng thực thi (execute) một hành động (operation). Request sẽ được đóng gói dưới dạng Command.
ConcreteCommand : là các implementation của Command. Định nghĩa một sự gắn kết giữa một đối tượng Receiver và một hành động. Thực thi execute() bằng việc gọi operation đang hoãn trên Receiver. Mỗi một ConcreteCommand sẽ phục vụ cho một case request riêng.
Client : tiếp nhận request từ phía người dùng, đóng gói request thành ConcreteCommand thích hợp và thiết lập receiver của nó.
Invoker : tiếp nhận ConcreteCommand từ Client và gọi execute() của ConcreteCommand để thực thi request.
Receiver : đây là thành phần thực sự xử lý business logic cho case request. Trong phương execute() của ConcreteCommand chúng ta sẽ gọi method thích hợp trong Receiver.
Như vậy, Client và Invoker sẽ thực hiện việc tiếp nhận request. Còn việc thực thi request sẽ do Command, ConcreteCommand và Receiver đảm nhận.

[Ref](https://gpcoder.com/4686-huong-dan-java-design-pattern-command/)

## Command pattern

Command pattern is a behavioural design pattern which lets us decouple the business logic from the client
implementation.


### Real World Analogy
Think of it like when you go to a restaurant you, call the waiter and command him to place your order and waiter passes
that command to the chief, and after chief completed the order it gets back to you.

### Use Cases
Command pattern also lets you do undo and redo operations. Suppose you are making a text editor and you wanted to
implement undo, redo feature, it is can advantageous. And Command pattern also provides a nice interface to implement
modular GUI Actions allowing us to seperate the UI Layer from the logic of the code.

Traditionally if you have a CopyText feature, you might face scenarios like when you want to allow users to trigger that
CopyText function from the ContextMenu and the Toolbar both, in this scenario Command Pattern can be very useful.

