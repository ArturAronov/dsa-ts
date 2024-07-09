export default class ArrayList<T> {
  length: number;
  #lastPointer: number;
  public array: Array<T | undefined> = new Array();

  constructor(initLength: number) {
    this.#lastPointer = 0;
    this.length = initLength;
    this.array = new Array(initLength);
  }

  public add(item: T): void {
    if (this.#lastPointer === this.length) {
      const tempArray = this.array;
      this.length *= 2;
      this.array = new Array(this.length);

      for (let i = 0; i < tempArray.length; i++) {
        this.array[i] = tempArray[i];
      }
    }
    this.array[this.#lastPointer] = item;
    this.#lastPointer++;
  }

  public pop(): void {
    if (this.#lastPointer) {
      this.array[this.#lastPointer - 1] = undefined;
      this.length--;
      this.#lastPointer--;
    }
  }

  public get(index: number): T | undefined {
    return this.array[index];
  }
}
