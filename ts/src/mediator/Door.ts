import Mediator from "./Mediator";
import Participant from "./Participant";

export default class Door extends Participant {
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
    dom.innerHTML = this.isClosed ? "Door Closed" : "Door Opend";

    if (this.isClosed) dom.classList.remove("hilighting");
    else dom.classList.add("hilighting");
  }
}
