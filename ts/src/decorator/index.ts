import BoxDecorator from "./BoxDecorator";
import LineNumberDecorator from "./LineNumberDecorator";
import SideDecorator from "./SideDecorator";
import Strings from "./Strings";
/*
Decorator의 핵심 => 자식이 부모를 생성자 인자로 받는다.
*/
const strs = new Strings();

strs.add("Hello");
strs.add("Live reload enabled.");
strs.add(
  "Failed to load resource: the server responded with a status of 404 (Not Found"
);
strs.add("http://127.0.0.1:5500/ts/dist/decorator/index.html");

const domPre = document.querySelector("pre");
// strs.print(domPre);

// const d1 = new SideDecorator(strs, '"');
// d1.print(domPre);
const d2 = new LineNumberDecorator(strs);
// d2.print(domPre);
const d3 = new BoxDecorator(d2);
d3.print(domPre);
