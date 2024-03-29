import Car from "./Car";
import CarBuilder from "./CarBuilder";

const car1 = new Car("V7", true, "black", true, false);
car1.print();

const car2 = new CarBuilder()
  .setAEB(false)
  .setAirbag(false)
  .setCamaeraSensor(true)
  .setEngine("V9")
  .setColor("red")
  .build();

car2.print();
