import {Category} from './enum'
import {Book, DamageLogger, Author, Librarian} from './interfaces'
import {UniversityLibrarian} from './classes'

//Alle zaken die in de return value zitten moeten voldoen aan de interface
function GetAllBooks(): Book[] {
    let books = [
        { id: 1, title: "cUlysses", author: "James Joyce", available: true, category: Category.Fiction },
        { id: 2, title: "A Farewell to arms", author: "Ernnst Hemingway", available: false, category: Category.Fiction },
        { id: 3, title: "I Know why the caged Bird Sings", author: "Maya Angelou", available: true, category: Category.Poetry },
        { id: 4, title: "Moby Dick", author: "Herman Melville", available: true, category: Category.Fiction },
    ]
    return books;
}

let myBook: Book =
    {
        id: 5,
        title: 'Pride and prejudice',
        author: 'Klaas Ranson',
        available: true,
        category: Category.Fiction,
        markDamage: (reason: string) => console.log('Damaged: ' + reason)
    }
myBook.markDamage("Gevaldlen");

//Voorbeeld van een Functie type definitie via een interface
let logDamage: DamageLogger;
logDamage = (reason: string) => console.log("this is " + reason);
logDamage('testing');

//Voorbeeld classes die een interface implementeren
let favoriteLibrarion: Librarian = new UniversityLibrarian();
favoriteLibrarion.name = "Sharon";
favoriteLibrarion.assistCustomer("Klaas");