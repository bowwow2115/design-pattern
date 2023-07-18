import Animal from "./Animal";
import Cat from "./Cat";
import Dog from "./Dog";
import Tiger from "./Tiger";
import TigerAdpater from "./TigerAdapter";

const list = Array<Animal>();

list.push(new Dog("댕이"));
list.push(new Cat("냥이"));
list.push(new Cat("냐옹이"));

const tigerAdpater = new TigerAdpater("타이거");
list.push(tigerAdpater);

list.forEach((animal) => {
  animal.sound();
});
