namespace Utility {
    //Voorbeeld van geneste namespaces.
    //Er wordt gebruik gemaakt van de export keyword omdat de nested namespace moet geexposed worden naar de buitenwereld 
    export namespace Fees {
        export function CalculateLateFee(daysLate: number): number {
            return daysLate * 25;
        }
    }

    export function MaxBooksAllowed(age: number): number {
        if (age < 12) {
            return 3;
        } else {
            return 10;
        }
    }

    function privateFunc(): void {
        console.log('This is private....');
    }
}