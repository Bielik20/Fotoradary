using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Net;
using System.Windows.Forms;
using System.Threading;

namespace WebContent.Models
{
    class DataClient
    {
        //private string adres = @"http://www.sm.poznan.pl/mim/straz/-,p,2322,21426.html";
        private string adres = @"https://web.archive.org/web/20150818033017/http://www.sm.poznan.pl/mim/straz/-,p,2322,21426.html";
        public List<Spot> Spots { get; private set; }

        //-----------------------------------------

        public DataClient()
        {
            Spots = new List<Spot>();
            Refresh();
        }

        //-----------------------------------------

        public void Refresh()
        {
            var nodes = DataDownload();
            var days = DataSeperate(nodes);

            foreach (var day in days)
            {
                CreateSpots(day);
            }       
        }

        private HtmlAgilityPack.HtmlNodeCollection DataDownload()
        {
            using (var wc = new System.Net.WebClient())
            {
                var doc = new HtmlAgilityPack.HtmlDocument();
                doc.Load(wc.OpenRead(adres), Encoding.UTF8);
                var nodes = doc.DocumentNode.SelectNodes("//p");

                return nodes;
            }
        }

        private List<string> DataSeperate(HtmlAgilityPack.HtmlNodeCollection nodes)
        {
            var temp = new List<string>();
            foreach (var node in nodes)
            {
                node.InnerHtml = 
                node.InnerHtml.Replace("<br>", "*");
                temp.Add(node.InnerText);
            }

            var start = temp.FindIndex(x => x.StartsWith("Miejsca pomiaru")) + 1;
            var end = temp.FindIndex(x => x.StartsWith("*****"));

            temp = temp.GetRange(start, end - start);

            return temp;
        }

        //-----------------------------------------

        private void CreateSpots(string day)
        {
            int _month;    
            int _day;
            string _place;

            int _hour;      
            int _minute;    

            int _durHour;
            int _durMinute;

            string[] dayList = day.Split('*');

            string[] temp = dayList[0].Split('.');
            _day = int.Parse(temp[0]);
            _month = int.Parse(temp[1]);


            for (int i = 1; i < dayList.Length; i++)
            {
                var a = dayList[i].LastIndexOf(' ', dayList[i].IndexOf(','));
                _place = dayList[i].Substring(0, a);

                var timeRange = dayList[i].Substring(a + 1).Split(new string[] { " - " }, StringSplitOptions.RemoveEmptyEntries);
                var start = timeRange[0].Split(',');
                var stop = timeRange[1].Split(',');

                _hour = int.Parse(start[0]);
                _minute = int.Parse(start[1]);

                var endHour = int.Parse(stop[0]);
                var endMinute = int.Parse(stop[1]);

                if(_minute > endMinute)
                {
                    endMinute += 60;
                    endHour--;
                }
                _durHour = endHour - _hour;
                _durMinute = endMinute - _minute;

                Spots.Add(new Spot(_month, _day, _hour, _minute, _durHour, _durMinute, _place));
            }
        }



    }
}
