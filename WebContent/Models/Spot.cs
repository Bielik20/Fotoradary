using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WebContent.Models
{
    class Spot
    {
        public DateTime Date { get; private set; }
        public TimeSpan Duration { get; private set; }
        public string Place { get; private set; }

        public string Start
        {
            get { return Date.ToString("HH:mm"); }
        }

        public string End
        {
            get { return Date.Add(Duration).ToString("HH:mm"); }
        }

        public Spot()
        {
            //Year, Mounth, Day, Hour, Minute, Second 
            Date = new DateTime(DateTime.Now.Year, 12, 24, 18, 30, 0);
            //Hours, Minutes, Seconds
            Duration = new TimeSpan(3, 0, 0);
        }

        public Spot(int month, int day, int hour, int minute, int durHour, int durMinute, string place)
        {
            Date = new DateTime(2015, month, day, hour, minute, 0);
            Duration = new TimeSpan(durHour, durMinute, 0);
            Place = place;
        }


    }
}
