class Item {
  constructor(private _name: String, private _cost: number) {}

  get name() {
    return this._name;
  }

  get cost() {
    return this._cost;
  }
}

export default Item;
