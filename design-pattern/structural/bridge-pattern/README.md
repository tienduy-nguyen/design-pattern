## Bridege Pattern

Một thành phần trong OOP thường có 2 phần: Phần trừu tượng (abstraction) định nghĩa các chức năng và phần thực thi (implementation) các chức năng được định nghĩa trong phần trừu tượng. Hai phần này liên hệ với nhau thông qua quan hệ kế thừa. Những thay đổi trong phần trừu tượng dẫn đến các thay đổi trong phần thực thi.

Điều đó có nghĩa là, ban đầu chúng ta thiết kế một class với rất nhiều xử lý, bây giờ chúng ta không muốn để những xử lý đó trong class đó nữa. Vì thế, chúng ta sẽ tạo ra một class khác và move các xử lý đó qua class mới. Khi đó, trong lớp cũ sẽ giữ một đối tượng thuộc về lớp mới, và đối tượng này sẽ chịu trách nhiệm xử lý thay cho lớp ban đầu.

`Bridge Pattern` được sử dụng để tách thành phần trừu tượng (abstraction) và thành phần thực thi (implementation) riêng biệt. Do đó, các thành phần này có thể thay đổi một cách độc lập mà không ảnh hưởng đến các thành phần khác. Thay vì liên hệ với nhau bằng quan hệ kế thừa, hai thành phần này liên hệ với nhau thông qua quan hệ “chứa trong” (object composition).


`Bridge Pattern` khá giống với mẫu `Adapter Pattern` ở chỗ là sẽ nhờ vào một lớp khác để thực hiện một số xử lý nào đó. Tuy nhiên, ý nghĩa và mục đích sử dụng của hai mẫu thiết kế này hoàn toàn khác nhau:

- `Adapter Pattern` hay còn gọi là Wrapper pattern được dùng để biến đổi một class/ interface sang một dạng khác có thể sử dụng được. `Adapter Pattern` giúp các lớp không tương thích hoạt động cùng nhau mà bình thường là không thể.
- `Bridge Pattern` được sử dụng được sử dụng để tách thành phần trừu tượng (abstraction) và thành phần thực thi (implementation) riêng biệt.
- `Adapter Pattern` làm cho mọi thứ có thể hoạt động với nhau sau khi chúng đã được thiết kế (đã tồn tại). `Bridge Pattern` nên được thiết kế trước khi phát triển hệ thống để Abstraction và Implementation có thể thực hiện một cách độc lập.


[Ref](https://gpcoder.com/4520-huong-dan-java-design-pattern-bridge/)