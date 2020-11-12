class Python {
  print(msg) {
    return console.log(msg);
  }
}
class Javascript {
  console(msg) {
    return console.log(msg);
  }
}
class LoggerAdapter {
  constructor(type) {
    if (type === 'py') {
      this.adapter = new Python();
    } else if (type === 'js') {
      this.adapter = new Javascript();
    }
  }
  log(type, msg) {
    if (type === 'py') {
      this.adapter.print(msg);
    } else if (type === 'js') {
      this.adapter.console(msg);
    }
  }
}

class Logger {
  log(type, msg) {
    this.adapter = new LoggerAdapter(type);
    this.adapter.log(type, msg);
  }
}

const logger = new Logger();
logger.log('js', 'Hello JavaScript');
logger.log('py', 'Hello Python');
