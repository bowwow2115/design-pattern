import Aggregator from "./Aggregator";
import Item from "./Item";
import Iterator from "./iterator";
import ArrayIterator from "./ArrayIterator";

class Array implements Aggregator<Item> {
  constructor(private items: Item[]) {}

  /**
   * getItem
   */
  public getItem(index: number) {
    return this.items[index];
  }

  public get count() {
    return this.items.length;
  }

  iterator(): Iterator<Item> {
    return new ArrayIterator(this);
  }
}

export default Array;
