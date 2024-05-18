// Zadanie 2.
// Ponizszy kod nie dziala, napraw go.

class Animal {

    constructor(name) {
      this.name = name;
    }
  
  }
  
  class Rabbit extends Animal {
        constructor(name) {
        super(name);
        this.created = Date.now();
        }


    getFormattedCreationDate() {
        let date = new Date(this.created);
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();

        let formattedDate = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        let formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        
        return `${formattedDate} ${formattedTime}`;
    }
      
      
  }
  
  let rabbit = new Rabbit("White Rabbit"); 
  console.log(rabbit.name);
  console.log(rabbit.created);
  console.log(rabbit.getFormattedCreationDate());
  

