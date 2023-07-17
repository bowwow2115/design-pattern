import Array from "./Array";
import Item from "./Item";

const items = [
  new Item("쿠쿠다스", 1000),
  new Item("새우깡", 800),
  new Item("빼빼로", 700),
  new Item("초코파이", 2000),
];

const array = new Array(items);
const iter = array.iterator();

while (iter.next()) {
  const item = iter.current();

  const domItem = document.createElement("div");
  domItem.innerText = `${item.name} : ${item.cost}원`;
  document.body.appendChild(domItem);

  domItem.classList.add("iterator-item");
}
