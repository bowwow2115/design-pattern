// import Cache from "./Cache";
// import DBMS from "./DBMS";
// import Message from "./Message";

import Facade from "./Facade";

// const dbms = new DBMS();
// const cache = new Cache();

const facade = new Facade();

const domInput = document.querySelector("input");
const domButton = document.querySelector("button");
const domResult = document.querySelector(".result");

domButton.addEventListener("click", () => {
  const name = domInput.value;

  facade.queryName(
    name,
    () => {
      domInput.value = "(조회 중...)";
      domButton.disabled = true;
    },
    () => {
      domInput.value = name;
      domButton.disabled = false;
    },
    domResult
  );

  // const row = cache.get(name);

  // if (!row) {
  //   domInput.value = "(조회 중...)";
  //   domButton.disabled = true;

  //   dbms.qeury(name, (row) => {
  //     domInput.value = name;
  //     domButton.disabled = false;
  //     if (row) {
  //       cache.put(row);
  //     }
  //     const message = new Message(row);
  //     message.print(domResult);
  //   });
  // } else {
  //   const message = new Message(row);
  //   message.print(domResult);
  // }
});
