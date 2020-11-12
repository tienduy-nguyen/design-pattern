## State Pattern

State Pattern
State pattern is a behavioural design pattern which lets objects change its behaviour based on its internal state.

If you wanted to see the code, i have three examples on state-pattern in my github repo:
[https://github.com/anuraghazra/design-patterns-everyday](https://github.com/anuraghazra/design-patterns-everyday)

▶️ State pattern can be correlated with State-Machines where at certain point of time an application can only be in one
state or in a limited finite number of states.

Where State-Machines heavily relays on if statements and switch cases which leads to Complex logic and unmaintainable
code when codebase gets larger. State pattern changes behaviour methods based on the current state.

Real World Analogy
Suppose you have a Music Player and that music player has 2 buttons "UP" & "DOWN"

When you are playing a song those "UP" & "DOWN" button will change the song volume.
And when you are on a playlist menu the Up and Down buttons will scroll up and down in the list.
Use Cases
A good real world use case would be a any drawing app / text editor or anything where you have some class which changes
its behaviour based on some state.

for example: if are building a drawing app the app will have a pain brush tool which would draw in different color/size
based on the selected color/size.

Another example would be text editor, where you have a class for writing the text on screen but depending on the
Uppercase/bold/lowercase buttons you write appropriate character to the screen

[Ref](https://dev.to/anuraghazra/design-patterns-everyday-53m0#Day-11)