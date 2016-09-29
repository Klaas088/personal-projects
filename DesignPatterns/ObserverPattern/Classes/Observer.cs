using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ObserverPattern.Classes
{
    public abstract class Observer
    {
        protected Subject subject;
        public abstract void Update();
    }
}
