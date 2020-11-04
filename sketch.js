
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const PLAY =1;
const END =0;

var engine, world;
var box1,box1,box1; 
var backgroundImg,platform;
var car;
var distance=50;
var gameState = PLAY;
var carPosition,groundPosition;
var setCarPosition =true;

function preload() {
  backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,650);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    blocker = new Ground(5,height/2,10,650);
    car = new Car(200,470);
    Matter.Body.setPosition(car.body, {x: 50 , y: ground.height/2+car.height/2-30});

    distance=50;
    carPosition = car.body.position;
    groundPosition = ground.body.position;

//platforms
    platform2 = new Ground(850, 240, 350, 10);
    platform3 = new Ground(1030, 285, 10, 100);
    platform4 = new Ground(1070, 330, 70, 10);
    platform5 = new Ground(810, 170, 60, 10);
    platform6 = new Ground(990, 70, 40, 5);
    platform7 = new Ground(1070, 270, 40, 5);

//left H
    box5 = new Box(740,200,70,70);
    box4 = new Box(740,90,70,70);
    box3 = new Box(740,200,70,70);

//middle H
    box2 = new Box(810,170,70,70);

//right H
    box1 = new Box(882,200,70,70);
    box7 = new Box(882,200,70,70);
    box6 = new Box(882,200,70,70);
    
//i
    box8 = new Box(990,160,55,150);
    box9 = new Box(990,30,40,40);
    
// !
    box10= new Box(1070, 290, 40, 40);
    box11= new Box(1070, 210, 55, 55);
    box12= new Box(1070, 210, 55, 55);
    box13= new Box(1070, 210, 55, 55);
    box14= new Box(1070, 210, 55, 55);
 }

function draw(){
    background(backgroundImg);
    Engine.update(engine);

     if(gameState===PLAY){
        car.display();
        accelerate();
        ground.display();
        blocker.display();
        box1.display();
        box2.display();
        box3.display();
        box4.display();
        box5.display();
        box6.display();
        box7.display();
        box8.display();
        box9.display();
        box10.display();
        box11.display();
        box12.display();
        box13.display();
        box14.display();
        platform2.display();
        platform3.display();
        platform4.display(); 
        platform5.display(); 
        platform6.display(); 
        platform7.display();
    }
    else if(gameState===END){
        console.log("End");
        setCarPosition=false;
        //  background(255);
       //   image(gameOver_img,450,250,900,500);
       //   textSize(40);
       //   fill("black");
       //   text("GAME OVER : ",groundPosition.width/2,groundPosition.height/2);
       //   noLoop();
      }
    
 }








 function accelerate(){
 
    followTheCar();
   
    if(keyDown(LEFT_ARROW)){
      //car.moveLeft();
      carPosition.x = carPosition.x -2;
      }
   
     if(keyDown(RIGHT_ARROW)){
       //car.moveRight();
       carPosition.x = carPosition.x +2;
       distance = distance+2;

      //  if(distance>500){
      //      gameState = END;
      //  }
  }
  
  if(setCarPosition){
    Matter.Body.setPosition(car.body, {x: carPosition.x , y: ground.height/2+car.height/2-30});
  }
}

function followTheCar(){
    camera.position.x = carPosition.x+400;
    //camera.position.y = ground.height-100;
}

