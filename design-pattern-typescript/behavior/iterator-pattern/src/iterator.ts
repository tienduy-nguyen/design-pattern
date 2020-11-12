
// iterator pattern
interface IIterator {
  next(): any
  hasNext(): any
}

interface ICounter {
  getIterator(): IIterator
}

class Counter implements ICounter {
  collection: any;
  constructor(data: any) {
    this.collection = data;
  }
  getIterator() {
    return new CounterIterator(this.collection)
  }
}

class CounterIterator implements IIterator {
  current: number;
  collection: any;
  constructor(data: any) {
    this.collection = data;
    this.current = 0;
  }

  next() {
    return this.collection[this.current++]
  }

  prev() {
    return this.collection[this.current - 1]
  }

  hasNext() {
    return this.collection.length > this.current
  }
}

let iterator = new Counter([1, 2, 3, 4, 5]).getIterator();
while (iterator.hasNext()) {
  console.log(iterator.next());
}