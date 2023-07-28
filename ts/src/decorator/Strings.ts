import Item from "./Item";

export default class Strings extends Item {
  private data = new Array<string>();

  constructor() {
    super();
  }

  getLinesCount(): number {
    return this.data.length;
  }
  getLength(i: number): number {
    return this.data[i].length;
  }
  getMaxLength(): number {
    let maxLength = 0;
    this.data.forEach((item) => {
      if (item.length > maxLength) maxLength = item.length;
    });
    return maxLength;
  }
  getString(i: number): string {
    return this.data[i];
  }

  add(str: string): void {
    this.data.push(str);
  }
}
