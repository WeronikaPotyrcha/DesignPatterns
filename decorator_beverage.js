// Tworzymy klasę opisującą podstawowy obiekt
class Beverage {
    constructor() {
      this.description = "Unknown Beverage";
    }
  
    getDescription() {
      return this.description;
    }
  
    cost() {
      return 0;
    }
  }
  
  // Tworzymy klasę dekorującą
  class CondimentDecorator extends Beverage {
    constructor(beverage) {
      super();
      this.beverage = beverage;
    }
  
    getDescription() {
      return this.beverage.getDescription();
    }
  
    cost() {
      return this.beverage.cost();
    }
  }
  
  // Tworzymy konkretne dekoratory
  
  class Mocha extends CondimentDecorator {
    constructor(beverage) {
      super(beverage);
      this.description = "Mocha";
    }
  
    cost() {
      return 0.20 + this.beverage.cost();
    }
  }
  
  class Soy extends CondimentDecorator {
    constructor(beverage) {
      super(beverage);
      this.description = "Soy";
    }
  
    cost() {
      return 0.15 + this.beverage.cost();
    }
  }
  
  // Tworzymy obiekt i dekorujemy go
  
  let beverage = new Beverage();
  beverage = new Mocha(beverage);
  beverage = new Soy(beverage);
  
  console.log(beverage.getDescription()); // "Unknown Beverage, Mocha, Soy"
  console.log(beverage.cost());