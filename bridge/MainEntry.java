package bridge;

public class MainEntry {

    public static void main(String[] args) {
        String title = "복원된 지구";
        String author = "박승훈";
        String[] contents = {
                "플라스틱 사용의 감소와",
                "바다 생물 어획량 감소로 인하여",
                "지구는 복원되었다"
        };
        Draft draft = new Draft(title, author, contents);

        Display display1 = new SimpleDisplay();
//        draft.print(display1);
//        System.out.println("-------------");
        Display display2 = new CaptionDisplay();
//        draft.print(display2);
        Publication publication = new Publication(title, author, contents, "영구출판", 100);
        publication.print(display2);
    }
}
