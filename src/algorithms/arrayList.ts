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
    let high = this.length;

    while (low < high && !availableIndex) {
      const mid = Math.floor((low + high) / 2);

      if (!this.array[mid] && this.array[mid - 1]) {
        availableIndex = mid;
        break;
      } else if (!this.array[mid]) {
        high = mid;
      } else {
        low = mid + 1;
      }
    }

    if (!availableIndex) {
      availableIndex = this.length;
      const tempArray = this.array;
      this.array = new Array(this.length * 2);
      this.array = [...tempArray];
    }

    this.array[availableIndex] = item;
    this.length++;
  }

  pop(): void {
    this.array[length] = undefined;
    this.length--;
  }

  get(index: number): T | undefined {
    return this.array[index];
  }
}
