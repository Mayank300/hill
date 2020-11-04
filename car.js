class Car extends BaseClass {
  constructor(x,y){
    super(x,y,240,180);
    this.image = loadImage("sprites/car.png");
  }

  display() {    
    super.display();
  }
}
