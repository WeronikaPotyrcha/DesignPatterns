class Calendar {
    constructor(dateFormat, font, illustrations, holidays) {
        this.dateFormat = dateFormat;
        this.font = font;
        this.illustrations = illustrations;
        this.holidays = holidays;
    }

    clone(){
        return new Calendar(this.dateFormat, this.font, this.illustrations, this.holidays)
    }
}

const calendarPrototype = new Calendar("DD/MM/YYYY", Arial, [], []);

const client1Calendar = calendarPrototype.clone()
client1Calendar.illustrations = ["picture1.jpg"];
client1Calendar.holidays = ["Christmas"];


const client2Calendar = calendarPrototype.clone();
client2Calendar.dateFormat = "MM/DD/YYYY";
client2Calendar.font = "Calibri";

console.log(client1Calendar);
console.log(client2Calendar);