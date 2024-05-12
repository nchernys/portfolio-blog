class QueueClass {
  constructor() {
    this.items = [];
  }

  enqueue(item) {
    this.items.push(item);
  }

  dequeue() {
    if (this.isEmpty()) {
      return "";
    }
    return this.items.shift();
  }

  front() {
    if (this.isEmpty()) {
      return "";
    }
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  printQueue() {
    let list = [];
    for (let i = 0; i < this.items.length; i++) {
      list.push(this.items[i]);
    }
    return list;
  }
}

export default QueueClass;
