class DateLibrary {
    getDate() {
        const currentDate = new Date();
        return currentDate.toLocaleDateString();
    }
}
class NewDateLibrary {
    getCurrentDate(){}
}

class DateAdapter extends NewDateLibrary {
    constructor() {
        super();
        this.dateLibrary = new DateLibrary();
    }
}
getCurrentDate(){
    return this.dateLibrary.getDate();
}

const newDateLibrary = new DateAdapter();
const currentDate = newDateLibrary.getCurrentDate();
console.log(currentDate);