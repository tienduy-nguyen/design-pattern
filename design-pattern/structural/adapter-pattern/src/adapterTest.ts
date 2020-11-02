class Python {
  print(msg: string) {
    return console.log(msg)
  }
}
class Javascript {
  console(msg: string) {
    return console.log(msg)
  }
}

class LoggerAdapter {
  adapter: any
  constructor(type: string) {
    if (type === "py") {
      this.adapter = new Python();
    } else if (type === "js") {
      this.adapter = new Javascript();
    }
  }

  log(type: string, msg: string) {
    if (type === "py") {
      this.adapter.print(msg)
    } else if (type === "js") {
      this.adapter.console(msg)
    }
  }
}

class Logger {
  adapter: any;
  log(type: string, msg: string) {
    this.adapter = new LoggerAdapter(type)
    this.adapter.log(type, msg)
  }
}

const logger = new Logger();

logger.log('js', 'Hello world js')
logger.log('py', 'Hello world py')