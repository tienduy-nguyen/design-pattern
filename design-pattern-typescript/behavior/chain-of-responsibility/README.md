## Chain of Responsibility

Chain of Responsiblity cho phép một đối tượng gửi một yêu cầu nhưng không biết đối tượng nào sẽ nhận và xử lý nó. Điều này được thực hiện bằng cách kết nối các đối tượng nhận yêu cầu thành một chuỗi (chain) và gửi yêu cầu theo chuỗi đó cho đến khi có một đối tượng xử lý nó.

Chain of Responsibility Pattern hoạt động như một danh sách liên kết (Linked list) với việc đệ quy duyệt qua các phần tử (recursive traversal).

Các thành phần tham gia mẫu Chain of Responsibility:

- Handler : định nghĩa 1 interface để xử lý các yêu cầu. Gán giá trị cho đối tượng successor (không bắt buộc).
- ConcreteHandler : xử lý yêu cầu. Có thể truy cập đối tượng successor (thuộc class Handler). Nếu đối tượng ConcreateHandler không thể xử lý được yêu cầu, nó sẽ gởi lời yêu cầu cho successor của nó.
- Client : tạo ra các yêu cầu và yêu cầu đó sẽ được gửi đến các đối tượng tiếp nhận.

Client gửi một yêu cầu để được xử lý gửi nó đến chuỗi (chain) các trình xử lý (handers), đó là các lớp mở rộng lớp Handler. Mỗi Hanlder trong chuỗi lần lượt cố gắng xử lý yêu cầu nhận được từ Client. Nếu trình xử lý đầu tiên (ConcreteHandler) có thể xử lý nó, thì yêu cầu sẽ được xử lý. Nếu không được xử lý thì sẽ gửi đến trình xử lý tiếp theo trong chuỗi (ConcreteHandler + 1).


[Ref](https://gpcoder.com/4665-huong-dan-java-design-pattern-chain-of-responsibility/)



## Chain of Responsibility. (CoR)
CoR is a behavioural design pattern which we know of as middlewares. CoR lets us delegate the individual logic as a
handler and passing it onto the next handler.

Real World Analogy
A good real world analogy would be call centers or tech support channels.. when you call them, firstly you are prompted
with an automated voice asking you to do some steps in order to talk to a real person, then they pass your call to a
real person and if they can't help you they will again pass your call to a technician.

Use Cases
Express.js heavily make use of CoR or Middleware pattern, it passed the next() handler to the next middleware performing
some checks and doing some operation in between.

CoR can be beneficial when you wanted to your logic to be reusable delegate the logic to multiple handlers. CoR also
helps minimizing the complexity of a tightly coupled system by making sure that every chunk of handler does some
specific work and passes the data to the next handler.

[Ref](https://dev.to/anuraghazra/design-patterns-everyday-53m0#Day-11)