import Row from "./Row";

export default class DBMS {
  private db = new Map<string, Row>();

  constructor() {
    this.db.set("jane", new Row("jane", "1990-02-14", "jane09@geosee.co.kr"));
    this.db.set(
      "robert",
      new Row("robert", "1994-03-12", "robert@geosee.co.kr")
    );
    this.db.set(
      "dorosh",
      new Row("dorosh", "1999-06-12", "dorosh@geosee.co.kr")
    );
  }

  qeury(name: string, callback: (row: Row) => void): void {
    setTimeout(() => {
      callback(this.db.get(name));
    }, 1500);
  }
}
