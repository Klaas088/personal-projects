import {CalculateLateFee as CalcFee, MaxBooksAllowed} from './utilityFunctions'
let fee = CalcFee(5);
let max = MaxBooksAllowed(12);

//Om alles te importeren
//import * as Utils from './utilityFunctions'
//let fee = Utils.CalculateLateFee(5);
//let max = Utils.MaxBooksAllowed(12);

console.log('Fee module' + fee);
console.log('Max module' + max);

//Om gebruik te maken van een defaultClass, je kan de naam kiezen.
import PersonDefault from './defaultclass'
let test = new PersonDefault("klaas", 28, "Hogedijkenstraat 36")
console.log(test.name + ' ' + test.adres + ' ' + test.age)