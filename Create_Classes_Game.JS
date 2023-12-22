class Hero{
    constructor(name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type;
    }

    Damage() {
        let Attack

        switch(this.type) {
            case "wizard":
                Attack = "magic"
                break
            case "warrior":
                Attack = "sword"
                break
            case "monk":
                Attack = "martial arts"
                break
            case "ninja":
                Attack = "shuriken"
                break
            default:
                Attack = "undefined attack"
        }

        console.log(`The ${this.type} ${this.name} attacked with ${Attack}`);

    }
}
const monk = new Hero("Harry", 23, "monk");

monk.Damage();
