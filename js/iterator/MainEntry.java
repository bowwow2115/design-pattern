package iterator;

public class MainEntry {
    public static void main(String[] args) {
        Item[] items = {
                new Item("CPU", 1000),
                new Item("Keyboard", 100),
                new Item("Mouse", 50),
                new Item("HDD", 10)
        };

        Array array = new Array(items);
        Iterator it = array.iterator();

        while (it.next()) {
            Item item = (Item) it.current();
            System.out.println(item);
        }
    }
}
