type Node<T> = {
  value: T;
  next?: Node<T>;
};

// FIFO

export default class Queue<T> {
  public length: number;
  private head?: Node<T>;
  private tail?: Node<T>;

  constructor() {
    this.head = this.tail = undefined;
    this.length = 0;
  }

  add(item: T): void {
    const node = { value: item };
    this.length++;
    // if (!this.tail) {
    if (!this.tail || !this.head) {
      this.tail = this.head = node;
      return;
    }

    this.tail.next = node;
    this.tail = node;
  }

  remove(): T | undefined {
    if (!this.head) return undefined;

    this.length--;

    const head = this.head;
    this.head = this.head.next;
    head.next = undefined;

    if (this.length === 0) this.tail = undefined;

    return head.value;
  }

  peek(): T | undefined {
    return this.head?.value;
  }
}
