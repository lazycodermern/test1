//example 1
class Car {
  constructor(brand, color) {
    this.brand = brand; // key = value
    this.color = color;
  }
  printcolor(str) {
    return str + this.color;
  }
}
var test = new Car("Audi", "black");
var result = test.printcolor("the color of my car is ");
console.log(result);


//example 2
class Circle {
  constructor(radius, color) {
    this.radius = radius;
    this.color = color;
  }
  get radiusCircle() {
    return this.radius;
  }
  get colorCircle() {
    return this.color;
  }
  set radiusCircle(radius) {
    this.radius = radius;
  }
  set colorCircle(color) {
    this.color = color;
  }
  get toString() {
    return `"Circle[radius=${this.radius}, color=${this.color}]"`;
  }
  get areaCircle() {
    return Math.PI * this.radius * this.radius;
  }
  get circumferenceCircle() {
    return 2 * Math.PI * this.radius;
  }
}
var obj1 = new Circle(1.0, "red");
console.log(obj1.radiusCircle); //get radiusCircle

obj1.radiusCircle = 2.2;
console.log(obj1.radiusCircle); //set radiusCircle
