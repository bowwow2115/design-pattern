import CharactersCounter from "./CharactersCount";
import Draft from "./Draft";
import SimpleDisplay from "./SimpleDisplay";

const title = "제목";
const author = "저자";
const content = ["내용1", "내용2", "내용3"];

// const draft = new Draft(title, author, content);
const draft = new CharactersCounter(title, author, content);

const display = new SimpleDisplay();
draft.print(display);

console.log(draft.getCharactersCount());
