package abstractfactory;

public class WindowsButton extends Button {

    public WindowsButton(String caption) {
        super(caption);
    }

    @Override
    public void clickEvent() {
        super.clickEvent();
    }

    @Override
    void render() {
        System.out.println("Windows 렌더링 API를 이용해 "
                + this.caption  + " 버튼을 그립니다.");
    }
}
