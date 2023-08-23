import Item from "./Item";

export type ItemName = "sword" | "shield" | "bow";

export default abstract class Factory {
  protected abstract isCreatable(name: ItemName): boolean;
  protected abstract createItem(name: ItemName): Item;
  protected abstract postProcessItem(name: ItemName): void;

  create(name: ItemName): Item {
    const isCreatable = this.isCreatable(name);
    if (isCreatable) {
      const item = this.createItem(name);
      this.postProcessItem(name);
      return item;
    }
    return null;
  }
}
