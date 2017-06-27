using System;
using System.Windows.Forms;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebContent.Models;
using System.Windows.Input;

namespace WebContent.ViewModels
{
    class DayViewControlVM : MainWindowVM
    {
        private DataClient dc;
        private List<Spot> spots;

        public ICommand NextCommand { get; private set; }
        public ICommand PrevCommand { get; private set; }

        //-----------------------------------------------------------------
        public DayViewControlVM()
        {
            dc = new DataClient();

            spots = dc.Spots;
            DisplaySpots = new List<Spot>();

            //ChosenDay = DateTime.Now;
            ChosenDay = new DateTime(2015, 8, 18);


            NextCommand = new RelayCommand(_ => ChosenDay = ChosenDay.Add(new TimeSpan(1, 0, 0, 0)));
            PrevCommand = new RelayCommand(_ => ChosenDay = ChosenDay.Add(new TimeSpan(-1, 0, 0, 0)));
        }

        //-----------------------------------------------------------------       

        //-----------------------------------------------------------------

        private List<Spot> displaySpots;

        public List<Spot> DisplaySpots
        {
            get { return spots.Where(x => DateTime.Compare(x.Date.Date, ChosenDay.Date) == 0).ToList(); }
            set
            {
                displaySpots = value;
                //OnPropertyChanged("DisplaySpots");
            }
        }

        private DateTime chosenDay;

        public DateTime ChosenDay
        {
            get { return chosenDay; }
            set
            {
                chosenDay = value;
                ShowChosenDay = chosenDay.ToString("dddd, dd MMMM yyyy").Replace(", ",  Environment.NewLine);
            }
        }

        private string showChosenDay;

        public string ShowChosenDay
        {
            get { return showChosenDay; }
            set
            {
                showChosenDay = value;
                OnPropertyChanged("ShowChosenDay");
                OnPropertyChanged("DisplaySpots");
            }
        }



    }
}
