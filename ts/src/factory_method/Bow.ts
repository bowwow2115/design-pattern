import Item from "./Item";

export default class Bow implements Item {
  use(): string {
    return "화살 사용!!";
  }
}
