
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground1;
var box1;
var stone1;
var ball1;

function setup() {
	createCanvas(900, 400);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
  
  

	ground1 = new Ground (410,200,200,10)
  ground2 = new Ground (610,300,200,10)

  box1= new Box (320, 180, 20,20)
  box2= new Box (350, 180, 20,20)
  box3= new Box (380, 180, 20,20)
  box4= new Box (410, 180, 20,20)

  box5= new Box (440, 180, 20,20)
  box6= new Box (470, 180, 20,20)
  box7= new Box (500, 180, 20,20)

  box8= new Box (360, 140, 35,35)
  box9= new Box (410, 140, 35,35)
  box10= new Box (460, 140, 35,35)

  box11= new Box (410, 80, 55,55)

  boxx= new Box (520, 280, 20,20)
  boxx2= new Box (550, 280, 20,20)
  boxx3= new Box (580, 280, 20,20)
  boxx4= new Box (610, 280, 20,20)

  boxx5= new Box (640, 280, 20,20)
  boxx6= new Box (670, 280, 20,20)
  boxx7= new Box (700, 280, 20,20)
  
  boxx8= new Box (560, 240, 35,35)
  boxx9= new Box (610, 240, 35,35)
  boxx10= new Box (660, 240, 35,35)
  boxx11= new Box (610, 180, 55,55)

  ball=Bodies.circle(50,200,20);
World.add(world,ball);

	SlingShot = new SlingShot(this.ball,{x:140, y:100});
  Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground1.display();
  ground2.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  boxx11.display();
  boxx8.display();
  boxx9.display();
  boxx10.display();
  boxx.display();
  boxx2.display();
  boxx3.display();
  boxx4.display();
  boxx5.display();
  boxx6.display();
  boxx7.display();
  SlingShot.display();



        fill('blue')
        ellipse(ball.position.x,ball.position.y,40,40);


  drawSprites();
 
}

function mouseDragged()
{
    Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY})
}

function mouseReleased()
{
    SlingShot.fly();
}

function keyPressed(){
    if (keyCode === 32){
       SlingShot.attach(this.ball)
    }
}
async function getBackgroundImage(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);

  if (hour>= 06 && hour<=18){
    background=(255,255,255);
  } else {
    background=(0,0,0);
  }
}