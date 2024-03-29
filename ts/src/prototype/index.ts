import Group from "./Group";
import Line from "./Line";
import Point from "./Point";

const domCanvas = document.querySelector("canvas");

const pt1 = new Point(100, 100);
pt1.draw(domCanvas);

const pt2 = new Point(200, 100);
pt2.draw(domCanvas);

const line1 = new Line(pt1, pt2);
line1.draw(domCanvas);

const pt3 = new Point(200, 200);
pt3.draw(domCanvas);

const pt4 = new Point(100, 200);
pt4.draw(domCanvas);

const line2 = new Line(pt2, pt3);
const line3 = new Line(pt3, pt4);
const line4 = new Line(pt4, pt1);

const rect = new Group();
rect.add(line1).add(line2).add(line3).add(line4);
rect.draw(domCanvas);

const cloneRect = rect.copy();
cloneRect.moveOffset(0, 200);

cloneRect.draw(domCanvas);
