import Mediator from "./Mediator";
import Participant from "./Participant";

export default class HeatBoiler extends Participant {
  private isOff = true;

  constructor(mediator: Mediator) {
    super(mediator);
  }

  on(): void {
    if (!this.isOff) return;
    this.isOff = false;
    this.mediator.participantChanged(this);
  }

  off(): void {
    if (this.isOff) return;
    this.isOff = true;
    this.mediator.participantChanged(this);
  }

  isRunning() {
    return !this.isOff;
  }

  displayState(dom: HTMLElement): void {
    dom.innerHTML = this.isOff ? "Bolier Off" : "Boiler On";

    if (this.isRunning()) dom.classList.add("hilighting");
    else dom.classList.remove("hilighting");
  }
}
