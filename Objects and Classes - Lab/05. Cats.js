function cats(arrayOfCats) {
    class Cat{
        constructor (name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    let cats = [];

    for (let catInfo of arrayOfCats) {
        let [catName, catAge] = catInfo.split(" ");
        let currentCat = new Cat(catName, catAge);
        cats.push(currentCat);
    }

    for (let cat of cats) {
        cat.meow();
    }
}

cats(['Mellow 2', 'Tom 5']);
cats(['Candy 1', 'Poppy 3', 'Nyx 2']);