import DigitFactory from "./DigitFactory";
import Number from "./Number";

const digitFactory = new DigitFactory();

const domTarget = document.querySelector("#tmp");

let value = 433123;

const number = new Number(digitFactory, value);
number.put(domTarget);
