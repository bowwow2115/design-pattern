import Display from "./Display";
import Draft from "./Draft";

export default class CaptionDispay implements Display {
  title(draft: Draft): void {
    console.log(`제목: ${draft.getTitle()}`);
  }
  author(draft: Draft): void {
    console.log(`저자: ${draft.getAuthor()}`);
  }
  content(draft: Draft): void {
    const content = draft.getContent();
    content.forEach((item) => {
      console.log(`내용: ${item}`);
    });
  }
}
