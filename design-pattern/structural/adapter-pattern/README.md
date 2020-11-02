## Adapter Pattern
Adapter pattern is a structural design pattern which acts like a translator between two different interfaces/api

### Use cases
This pattern could be usefull in cases where you have two different APIs and you want an universal interface to handle both of them.

Let's take an example suppose you are building a 2D Renderer for web which supports both WebGL & Canvas API you can make an universal rendering api and use adapter pattern to fill gaps between them.

### Example

```js
class Python {
  print(msg: string) {
    return console.log(msg);
  }
}
class Javascript {
  console(msg: string) {
    return console.log(msg);
  }
}

class LoggerAdapter {
  adapter: any;
  constructor(type: string) {
    if (type === 'py') {
      this.adapter = new Python();
    } else if (type === 'js') {
      this.adapter = new Javascript();
    }
  }

  log(type: string, msg: string) {
    if (type === 'py') {
      this.adapter.print(msg);
    } else if (type === 'js') {
      this.adapter.console(msg);
    }
  }
}

class Logger {
  adapter: any;
  log(type: string, msg: string) {
    this.adapter = new LoggerAdapter(type);
    this.adapter.log(type, msg);
  }
}

const logger = new Logger();

logger.log('js', 'Hello world js');
logger.log('py', 'Hello world py');
```


[Ref1](https://dev.to/anuraghazra/design-patterns-everyday-53m0#Day-2)


[Ref2](https://gpcoder.com/4483-huong-dan-java-design-pattern-adapter/)