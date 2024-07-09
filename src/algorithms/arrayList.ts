export default class ArrayList<T> {
  private length: number;
  public array: Array<T | undefined> = new Array();

  constructor(initLength: number) {
    this.length = initLength;
    this.array = new Array(initLength);
  }

  add(item: T): void {
    let availableIndex;
    let low = 0;
    let high = this.length - 1;
    if (this.array[0] === undefined) availableIndex = 0;

    while (low < high && !availableIndex) {
      const mid = Math.floor((low + high) / 2);

      if (this.array[mid] === undefined && this.array[mid - 1]) {
        availableIndex = mid;
        break;
      } else if (this.array[mid] === undefined) {
        high = mid;
      } else {
        low = mid + 1;
      }
    }

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

  pop(): void {
    let lastIndex;
    let low = 0;
    let high = this.length - 1;

    while (low < high && !lastIndex) {
      const mid = Math.floor((low + high) / 2);

      if (this.array[mid] === undefined && this.array[mid - 1]) {
        lastIndex = mid;
        break;
      } else if (this.array[mid] === undefined) {
        high = mid;
      } else {
        low = mid + 1;
      }
    }

    if (lastIndex) {
      this.array[lastIndex - 1] = undefined;
      this.length--;
    }
  }

  get(index: number): T | undefined {
    return this.array[index];
  }
}
