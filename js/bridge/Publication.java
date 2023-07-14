package bridge;

public class Publication extends Draft {
    private String publisher;
    private int cost;

    public Publication(String title, String author, String[] contents, String publisher, int cost) {
        super(title, author, contents);
        this.publisher = publisher;
        this.cost = cost;
    }

    private void printPublicationInfo() {
        System.out.println("#" + publisher + "$" + cost);
    }

    public void print(Display display) {
        super.print(display);
        printPublicationInfo();
    }
}
