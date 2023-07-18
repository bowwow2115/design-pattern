import Article from "./Article";
import DisplayArticleTemplate from "./DisplayArticleTemplate";
import EditableDisplayArticle from "./EditableDisplayArticle";
import SimpleDisplayArticle from "./SimpleDisplayArticle";

const article = new Article(
  "GIS 분야의 업무",
  ["1", "2", "3", "4"],
  "Developer"
);

const displayArticleTemplate = new EditableDisplayArticle(article);
const simpleDisplayArticle = new SimpleDisplayArticle(article);
document.querySelector(".content").innerHTML =
  displayArticleTemplate.displayHtml();
