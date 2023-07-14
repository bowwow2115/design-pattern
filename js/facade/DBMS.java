package facade;

import java.util.HashMap;
import java.util.Locale;

public class DBMS {
    private HashMap<String, Row> db = new HashMap<String, Row>();

    public DBMS() {
        db.put("jane", new Row("Jane", "1990-01-01", "jane90@google.com"));
        db.put("robert", new Row("Robert", "1999-12-31", "robert99@google.com"));
        db.put("dorosh", new Row("Dorosh", "1988-12-01", "dorosh88@google.com"));
    }

    public Row query(String name) {
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        return db.get(name.toLowerCase());
    }
}
