## Mediator Pattern

Define an object that encapsulates how a set of objects interact. Mediator promotes loose coupling by keeping objects from referring to each other explicitly, and it lets you vary their interaction independently.

Mediator Pattern là một trong những Pattern thuộc nhóm hành vi (Behavior Pattern). Mediator có nghĩa là người trung gian. Pattern này nói rằng “Định nghĩa một đối tượng gói gọn cách một tập hợp các đối tượng tương tác. Mediator thúc đẩy sự khớp nối lỏng lẻo (loose coupling) bằng cách ngăn không cho các đối tượng đề cập đến nhau một cách rõ ràng và nó cho phép bạn thay đổi sự tương tác của họ một cách độc lập”.

Mediator Patern (mô hình trung gian) được sử dụng để giảm sự phức tạp trong “giao tiếp” giữa các lớp và các đối tượng. Mô hình này cung cấp một lớp trung gian có nhiệm vụ xử lý thông tin liên lạc giữa các tầng lớp, hỗ trợ bảo trì mã code dễ dàng bằng cách khớp nối lỏng lẻo.

Khớp nối lỏng lẻo ở đây được hiểu là các đối tượng tương đồng không “giao tiếp” trực tiếp với nhau mà giao tiếp thông qua người trung gian, và nó cho phép thay thay đổi cách tương tác giữa chúng một cách độc lập.

Mediator Patern thúc đẩy mối quan hệ nhiều – nhiều (many-to-many) giữa các đối tượng tượng với nhau để đạt đến được kết quả mong muốn.

## Mediator pattern
Mediator design is a behavioural design pattern which determines how set of objects will interact with each other.
mediator pattern encourages loose coupling between components because it prevents objects from directly referencing each
other. thus reducing the overall complexity.

Mediator acts as an middle-man between different objects and all other objects will communicate through the mediator
only.

### Real World Analogy
A nice real world analogy would be Air Traffic Controller. While landing and taking off airplanes does not talk to each
other directly instead they talk to the air traffic controllers to get information about other airplanes and the control
tower tell them when to land/takeoff.

### Use Cases
I think this pattern has some use cases, for example when building ChatRooms you can implement mediator pattern to
simplify the relation between different members of the chatroom and send them messages though the Mediator.

You can also use Mediator pattern as a global event manager in front end applications where components talk to each
other by the mediator instead of passing callbacks/props.

[Ref](https://dev.to/anuraghazra/design-patterns-everyday-53m0#Day-11)