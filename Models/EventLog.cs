using System.Collections.Generic;
using System;
using System.Text.Json.Serialization;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace event_log.Models
{
    public class EventLog
    {
        public int id { get; set; }

        [Required]
        public string name { get; set; }

        [Required]
        [DataType(DataType.EmailAddress)]
        [EmailAddress]
        //validated format?
        public string emailAddress { get; set; }

        // this is ignoring putting the petList into the DB table; not a DB column but a dynamic created field to get the pet count;
        // [JsonIgnore]
        // public ICollection<Event> petList { get; set; }
        


        // [NotMapped]
        // public int eventCount
        // {
        //     get
        //     {
        //         Console.WriteLine("in eventCount");
        //         Console.WriteLine("this is eventCount" + this.petList);
        //         return (this.petList != null ? this.petList.Count : 0);
        //     }
        // }


    }
}
