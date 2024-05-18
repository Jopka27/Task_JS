// Zadanie 4.
//
// Jak wiemy, wszystkie obiekty zazwyczaj dziedziczą po Object.prototype i mają
// dostęp do „ogólnych” metod obiektowych, takich jak hasOwnProperty itd.
// Na przykład:

class Rabbit {
    constructor(name) {
      this.name = name;
    }
  }
  
  let rabbit = new Rabbit("Rab");
  
  console.log(rabbit.hasOwnProperty('name')); // true
  
  // Ale jeśli wyrażamy to explicite, jak "class Rabbit extends Object", to czy
  // wynik będzie różnił się od prostego "class Rabbit"? Jaka jest różnica?
  // Oto przykład takiego kodu (nie działa – dlaczego? Napraw go):
  
  class Rabbit extends Object {
    constructor(name) {
    super();
      this.name = name;
    }
  }
  
  //Przyczyną tego błędu jest to, że konstruktor klasy pochodnej nie wywołuje konstruktora klasy 
  //bazowej. W JavaScript, jeśli klasa dziedziczy po innej klasie, należy wywołać „super()” w 
  //konstruktorze klasy pochodnej przed użyciem „this”.

  let rabbit = new Rabbit("Rab");
  
  console.log(rabbit.hasOwnProperty('name')); // Error
  