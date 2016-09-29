using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ObserverPattern.Classes
{
    class HexObserver : Observer
    {
        public HexObserver(Subject subject)
        {
            this.subject = subject;
            this.subject.attach(this);

        }

        public override void Update()
        {
            Console.WriteLine("Hex: " + subject.Name);
        }
    }
}
