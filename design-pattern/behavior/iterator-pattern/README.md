## Iterator Pattern

Iterator Pattern là một trong những Pattern thuộc nhóm hành vi (Behavior Pattern). Nó được sử dụng để “Cung cấp một cách thức truy cập tuần tự tới các phần tử của một đối tượng tổng hợp, mà không cần phải tạo dựng riêng các phương pháp truy cập cho đối tượng tổng hợp này”.

Nói cách khác, một Iterator được thiết kế cho phép xử lý nhiều loại tập hợp khác nhau bằng cách truy cập những phần tử của tập hợp với cùng một phương pháp, cùng một cách thức định sẵn, mà không cần phải hiểu rõ về những chi tiết bên trong của những tập hợp này.

Iterator thường được viết trong Java như là những lớp độc lập. Ý tưởng thiết kế này là một trong những kỹ thuật được gọi là “đơn trách nhiệm – Single responsibility principle (SRP)” – một lớp chỉ có duy nhất một công việc để làm. Hãy suy nghĩ rằng tập hợp duy trì các phần tử, một iterator cung cấp cách thức làm việc với các phần tử đó. Đó cũng là lý do tại sao những Iterator có thể làm việc được trong các tập hợp khác nhau.

Tách biệt trách nhiệm giữa các lớp rất hữu dụng khi một lớp bị thay đổi. Nếu có quá nhiều thứ bên trong một lớp đơn lẻ, sẽ rất khó khăn để viết lại mã nguồn. Khi diễn ra sự thay đổi, một lớp “đơn trách nhiệm” sẽ chỉ có một lý do duy nhất để thay đổi.

Chúng ta có thể thấy Interator Pattern được áp dụng trong java với Interface iterator trong gói java.util.Iterator. Interface này định nghĩa các phương thức sau:

Hàm next() : trả về phần tử kế tiếp trong tập hợp
Hàm hasNext() : trả về giá trị True nếu vẫn còn phần tử trong tập hợp và trả về false trong trường hợp ngược lại.
Đó là cách Iterator làm việc. Nó cung cấp một giao diện đơn giản, nhất quán để làm việc với các tập hợp khác nhau.

Giả sử rằng Client phải làm việc với một tập hợp phức tạp và rắc rối ( như hình sau) và không biết cách thức làm việc với nó như thế nào.



Client có thể sử dụng iterator để làm cầu nối với tập hợp, và client có thể sử dụng các phương thức cơ bản của Iterator để giao tiếp với tập hợp. Như hình sau:

 
[Ref](https://gpcoder.com/4724-huong-dan-java-design-pattern-iterator/)


## Iterator pattern
Iterator pattern is a behavioural design pattern which lets us traverse any complex data structure without exposing the
underlying implementation to the client.

### Use Cases
We can traverse graphs, lists, trees with iterator pattern easily. Javascript internally uses Iterator Protocol to
implement [...spread] spread operators and loops.