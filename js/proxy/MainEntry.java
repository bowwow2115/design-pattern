package proxy;

public class MainEntry {
    public static void main(String[] args) {
//        Display display = new ScreenDisplay();
        Display display = new BufferDisplay(5);

        for(int i=0;i<7;i++)
        display.print("안녕하세요");

        ((BufferDisplay)display).flush();
    }
}
