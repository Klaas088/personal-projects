function GetAllBooks() {
    let books = [
        { id: 1, title: "Ulysses", author: "James Joyce", available: true, category: Category.Fiction },
        { id: 2, title: "A Farewell to arms", author: "Ernnst Hemingway", available: false, category: Category.Fiction },
        { id: 3, title: "I Know why the caged Bird Sings", author: "Maya Angelou", available: true, category: Category.Poetry },
        { id: 4, title: "Moby Dick", author: "Herman Melville", available: true, category: Category.Fiction },
    ]
    return books;
}
enum Category { Biagraphy, Poetry, Fiction, History, Children }
//function LogFirstAvailable(books): void {
//    let numberOfBooks: number = books.length;
//    let firstAvailable: string = '';
//    for (let currentBook of books) {
//        if (currentBook.available) {
//            firstAvailable = currentBook.title;
//            break;
//        }
//    }
//    console.log('Total Books: ' + numberOfBooks)
//    console.log('First Available: ' + firstAvailable)
//}

//function LogBookTitles(titles: string[]): void {
//    for (let title of titles) {
//        console.log(title)
//    }
//}

/** Arrow functions **/
function GetBookById(id: number) {
    let books = GetAllBooks();
    return books.filter(item => item.id === id)[0];
}

const books = GetAllBooks();
books.forEach((itemOfArray, id, completeArray) => console.log(itemOfArray.title));

const book = GetBookById(2);
console.log(book.title);

/** Function Types **/
/*Je kan aan een variable ook een type 'functie' meegeven zoals je dit doet met string of number,
Dan kan je simpel andere functies toekennen aan deze variable, maar deze moeten dan de zelfde parameters hebben als je type
anders faalt de typescript compiler*/

function PublicationMessage(year: number): string {
    return "Datum: " + year;
}

//Hier gebruik je ook een ':' om je type eraan toe te kennen in dit geval een functie
let publFunc: (someYear: number) => string;
//publFunc = PublicationMessage;
//Je kan ook meteen een functie gaan toekennen.
publFunc = (someyear: number) => "Datum " + someyear;
let message: string = publFunc(20186);
console.log(message);

/** Rest parameters **/
/*Als laatste parameter aan een functie kun je een rest parameter meegeven (altijd een array van een bepaald type), hiermee kan je oneindig veel items gaan toevoegen.*/

function GetBooksReadForCustomers(name: string, ...bookIds: number[]) {
    bookIds.forEach(id => console.log(name + " Id: " + id));
}

GetBooksReadForCustomers("Klaas", 1, 2, 3, 4, 6)

/** Function Overloads **/
/*Er wordt gesproken van function overloading als een functie dezelfde naam heeft maar andere parameters, 
maar als de typescript wordt gecompileerd naar javascript vervallen de paramter types en is dit dus een probleem*/

function GetTitles(author: string): string[];
function GetTitles(available: boolean): string[];
function GetTitles(bookProperty: any): string[] {
    if (typeof bookProperty === "string") {
        //Do stuff
    }
    if (typeof bookProperty === "boolean") {
        //Do stuff
    }
    return null;

}
