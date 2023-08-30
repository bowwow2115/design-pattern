import Point from "./Point";
import Prototype from "./Prototype";
import Shape from "./Shape";

export default class Line implements Prototype, Shape {
  private pt1: Point;
  private pt2: Point;

  constructor(pt1: Point, pt2: Point) {
    this.pt1 = pt1.copy();
    this.pt2 = pt2.copy();
  }

  draw(canvas: HTMLCanvasElement): this {
    const context = canvas.getContext("2d");
    context.beginPath();
    context.moveTo(this.pt1.getX(), this.pt1.getY());
    context.lineTo(this.pt2.getX(), this.pt2.getY());
    context.stroke();
    return this;
  }

  moveOffset(dx: number, dy: number): this {
    this.pt1.moveOffset(dx, dy);
    this.pt2.moveOffset(dx, dy);
    return this;
  }

  copy(): this {
    const result = new Line(this.pt1, this.pt2);
    return result as this;
  }
}
