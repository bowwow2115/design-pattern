import Data from "./Data";
import Director from "./Director";
import JSONBuilder from "./JSONBuilder";
import PlainTextBuilder from "./PlainTextBuilder";
import XMLBuilder from "./XMLBuilder";

const data = new Data("Jane", 76);

const builder = new XMLBuilder(data);

const director = new Director(builder);

const result = director.build();

console.log(result);
