import { data } from "./data/data";

export default class Digit {
  private data: Array<string> = null;

  constructor(private index: number) {}

  private load(index: number, domOutput: Element) {
    this.data = data[index];
    if (domOutput) this.put(domOutput);
  }

  put(dom: Element): void {
    if (!this.data) this.load(this.index, dom);
    else {
      dom.innerHTML = '<div class="digit-layout"></div>';
      const domLayout = dom.querySelector(".digit-layout");

      this.data.forEach((item: string) => {
        const len = item.length;
        for (let i = 0; i < len; i++) {
          const domCell = document.createElement("div");
          domCell.style.backgroundColor = item[i] === "1" ? "#ff0" : "#333";
          domLayout.append(domCell);
        }
      });
    }
  }
}
