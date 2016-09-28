
//Aangezien je maar 1 item wenst te exporteren, dan doe je dit zo.
//De naam 'Person' is optioneel.
export default class Person {
    name: string;
    age: number;
    adres: string;
    constructor(name: string, age: number, adres: string) {
        this.name = name;
        this.age = age;
        this.adres = adres;
    }
}