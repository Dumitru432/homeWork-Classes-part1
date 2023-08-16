class Circle {
    constructor(radius) {
      this._radius = radius;
    }
  
    get radius() {
      return this._radius;
    }
  
    set radius(value) {
      if (value >= 0) {
        this._radius = value;
      } else {
        throw new Error("Radius cannot be negative.");
      }
    }
  
    get diameter() {
      return 2 * this._radius;
    }
  
    area() {
      return Math.PI * this._radius ** 2;
    }
  
    circumference() {
      return 2 * Math.PI * this._radius;
    }
  }
  

  const circle = new Circle(5);
  
  console.log("Radius:", circle.radius);
  console.log("Diameter:", circle.diameter);
  console.log("Area:", circle.area());
  console.log("Circumference:", circle.circumference());
  
  circle.radius = 7;
  console.log("\nAfter setting a new radius:");
  console.log("Radius:", circle.radius);
  console.log("Diameter:", circle.diameter);
  console.log("Area:", circle.area());
  console.log("Circumference:", circle.circumference());


  // 2) Implement a class that describes a stationery marker. It must have the following components:
  class StationeryMarker {
    constructor(color, inkPercent) {
      this.color = color;
      this.inkPercent = inkPercent;
    }
  
    inputText(text) {
      const nonWhitespaceChars = text.replace(/\s/g, '').length;
      const inkUsage = nonWhitespaceChars * 0.5;
  
      if (inkUsage <= this.inkPercent) {
        this.inkPercent -= inkUsage;
        console.log(`Printed '${text}' in ${this.color} color.`);
      } else {
        console.log("Not enough ink to print the entire text.");
      }
    }
  }
  
  class RefillableMarker extends StationeryMarker {
    refillInk(amount) {
      this.inkPercent = Math.min(this.inkPercent + amount, 100);
      console.log(`Refilled ${amount}% ink. Current ink level: ${this.inkPercent}%`);
    }
  }
  
  const stationeryMarker = new StationeryMarker("Blue", 50);
  stationeryMarker.inputText("Hello, world!");
  stationeryMarker.inputText("Ink test");
  
  console.log("\nRefillable Marker:");
  const refillableMarker = new RefillableMarker("Red", 30);
  refillableMarker.inputText("This is a refillable marker test.");
  refillableMarker.refillInk(70);
  refillableMarker.inputText("After refill ink test.");

  

  
  