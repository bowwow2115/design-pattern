package decorator;

public class MainEntry {
    public static void main(String[] args) {
        Strings strings = new Strings();

        strings.add("Hello");
        strings.add("HelloHello");
        strings.add("HelloHello");
        strings.add("HelloHelloHelloHello");
        strings.add("HelloHelloHelloHelloHello");

//        strings.print();
        Item decorator = new SideDecorator(strings, '\"');
        decorator = new LineNumberDecorator(decorator);
        decorator = new BoxDecorator(decorator);

        decorator.print();

    }
}
