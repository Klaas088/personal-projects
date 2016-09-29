using ObserverPattern.Classes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ObserverPattern
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Start: Observer pattern");

            var subject = new Subject();

            var hexObserver = new HexObserver(subject);
            var binaryObserver = new BinaryObserver(subject);

            subject.Name = "Klaas";
            subject.notifyAllObservers();
            subject.Name = "Marieke";
            subject.notifyAllObservers();

            Console.WriteLine("Stop: Observer pattern");
            Console.ReadLine();
        }
    }
}
