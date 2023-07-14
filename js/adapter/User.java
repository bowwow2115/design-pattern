package adapter;

import java.util.ArrayList;

public class User {
    public static void main(String[] args) {
        ArrayList<Animal> animals = new ArrayList<Animal>();
        animals.add(new Dog("백구"));
        animals.add(new Cat("나비1"));
        animals.add(new Cat("나비2"));
        animals.add(new TigerAdapter("큰나비"));

        animals.forEach( animal -> {
            animal.sound();
        });
    }
}
