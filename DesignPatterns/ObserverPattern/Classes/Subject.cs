using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ObserverPattern.Classes
{
    public class Subject
    {
        private List<Observer> observerList = new List<Observer>();

        public string Name { get; set; }

        public void attach(Observer observer)
        {
            observerList.Add(observer);
        }

        public void deattach(Observer observer)
        {
            observerList.Remove(observer);
        }

        public void notifyAllObservers()
        {
            observerList.ForEach(obser => obser.Update());
        }
    }
}
