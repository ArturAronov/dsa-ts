type Node<T> = {
  value: T;
  previous?: Node<T>;
};

// LIFO

export default class Stack<T> {
  private length;
  public head?: Node<T>;

  constructor() {
    this.length = 0;
    this.head = undefined;
  }

  add(item: T): void {
    const node: Node<T> = { value: item };

    this.length++;
    if (!this.head) {
      this.head = node;
      return;
    }

    node.previous = this.head;
    this.head = node;
  }

  remove(): T | undefined {
    if (!this.head) return undefined;

    this.length = Math.max(0, this.length - 1);
    const head = this.head;

    if (this.length === 0) {
      this.head = undefined;
      return head?.value;
    }

    this.head = head.previous;

    return head.value;
  }

  peek(): T | undefined {
    return this.head?.value;
  }
}
