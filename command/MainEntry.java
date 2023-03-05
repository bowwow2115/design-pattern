package command;

public class MainEntry {
    public static void main(String[] args) {
        CommandGroup commandGroup = new CommandGroup();

        Command clearCmd = new ClearCommand();
//        clearCmd.run();
        commandGroup.add(clearCmd);

        Command yellowColorCmd = new ColorCommand(ColorCommand.Color.YELLOW);
//        yellowColorCmd.run();
        commandGroup.add(yellowColorCmd);

        Command moveCmd = new MoveCommand(10, 1);
//        moveCmd.run();
        commandGroup.add(moveCmd);

        Command printCmd = new PrintCommand("Command 패턴");
//        printCmd.run();
        commandGroup.add(printCmd);

        Command greenCommand = new ColorCommand(ColorCommand.Color.GREEN);
//        greenCommand.run();
        commandGroup.add(greenCommand);

        Command moveCmd2 = new MoveCommand(15, 5);
//        moveCmd2.run();
        commandGroup.add(moveCmd2);
        commandGroup.add(printCmd);

        commandGroup.run();
    }
}
