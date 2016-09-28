/*Triple slash references doet enkele zaken voor jouw
- Zorgt voor code completion (vs)
- Typescript compiler compileert automatisch alle reference files
- Als je gebruik maakt van een -outfile parameter in de compiler dan worden alle referenties gegenereert naar een 1 javascript file
*/

///<reference path="utilityFunctions.ts"/>

//Om je code wat te optimaliseren kan je gebruik maken van een alias
import util = Utility.Fees;

let fee = util.CalculateLateFee(52)
console.log('Fee: ' + fee);