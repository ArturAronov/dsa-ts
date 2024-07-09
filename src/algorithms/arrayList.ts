export default class ArrayList<T> {
  private length: number;
  public array: Array<T | undefined> = new Array();

  constructor(initLength: number) {
    this.length = initLength;
    this.array = new Array(initLength);
  }

  public add(item: T): void {
    let availableIndex = this.traverse();
    if (this.array[0] === undefined) availableIndex = 0;

    if (
      availableIndex === undefined &&
      this.array[this.length - 1] !== undefined
    ) {
      availableIndex = this.length;
      const tempArray = this.array;
      this.length *= 2;
      this.array = new Array(this.length);

      for (let i = 0; i < tempArray.length; i++) {
        this.array[i] = tempArray[i];
      }
    } else if (availableIndex === undefined) {
      availableIndex = this.length - 1;
    }

    this.array[availableIndex] = item;
  }

  public pop(): void {
    const lastIndex = this.traverse();
    if (lastIndex) {
      this.array[lastIndex - 1] = undefined;
      this.length--;
    }
  }

  public get(index: number): T | undefined {
    return this.array[index];
  }

  private traverse(): number | undefined {
    let searchIndex;
    let low = 0;
    let high = this.length - 1;

    while (low < high) {
      const mid = Math.floor((low + high) / 2);

      if (this.array[mid] === undefined && this.array[mid - 1]) {
        searchIndex = mid;
        break;
      } else if (this.array[mid] === undefined) {
        high = mid;
      } else {
        low = mid + 1;
      }
    }

    return searchIndex;
  }
}
