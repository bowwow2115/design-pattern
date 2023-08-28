import Mediator from "./Mediator";
import Participant from "./Participant";

export default class Window extends Participant {
  private isClosed = true;

  constructor(mediator: Mediator) {
    super(mediator);
  }

  open(): void {
    if (!this.isClosed) return;
    this.isClosed = false;
    this.mediator.participantChanged(this);
  }

  close(): void {
    if (this.isClosed) return;
    this.isClosed = true;
    this.mediator.participantChanged(this);
  }

  get getIsClosed() {
    return this.isClosed;
  }

  displayState(dom: HTMLElement): void {
    dom.innerHTML = this.isClosed ? "Window Closed" : "Window Opend";
  }
}
