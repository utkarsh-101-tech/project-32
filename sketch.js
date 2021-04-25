
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var score = 0;
var bg = 0;

function preload()
{
polygonImg = loadImage("polygon.png");
	  clock();
}

function setup() 
{
createCanvas(1600, 800);
  
   engine = Engine.create();
	world = engine.world;

   box1 = new Box(400,690,30,40);
   box2 = new Box(430,690,30,40);
   box3 = new Box(450,690,30,40);
   box4 = new Box(470,690,30,40);
   box5 = new Box(490,690,30,40);
   box6 = new Box(510,690,30,40);
   box7 = new Box(530,690,30,40);
   box8 = new Box(430,650,30,40);
   box9 = new Box(450,650,30,40);
   box10 = new Box(470,650,30,40);
   box11 = new Box(490,650,30,40);
   box12 = new Box(510,650,30,40);
   box13 = new Box(450,610,30,40);
   box14 = new Box(470,610,30,40);
   box15 = new Box(490,610,30,40);
   box16 = new Box(470,570,30,40);
   
   box17 = new Box(930,370,30,40);
   box18 = new Box(960,370,30,40);
   box19 = new Box(990,370,30,40);
   box20 = new Box(1010,370,30,40);
   box21 = new Box(1040,370,30,40);
   box22 = new Box(960,330,30,40);
   box23 = new Box(990,330,30,40);
   box24 = new Box(1010,330,30,40);
   box25 = new Box(990,290,30,40);
  


   ground1 = new Ground(800,780,1600,2);
   base1 = new Ground(500,720,300,20);
   base2 = new Ground(1000,400,300,20);
   
   var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':5
        }
   polygon1 =Bodies.polygon(200, 500, 6,20,options);
   World.add(world,polygon1);

   sling1 = new Shot(polygon1,{x:200,y:500});

 
}

 
function draw() 
{
  rectMode(CENTER);
  background(bg);
 Engine.update(engine);
textSize(25);
  fill("yellow");
  text("To Launch it, Drag it !!",70,30);

  textSize(50);
  fill(255);
  text("SCORE: "+score , width/2 , 50);

  
fill(254,191,202);
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();

  fill(135,206,234);
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();

   fill(62,223,207);
  box13.display();
  box14.display();
  box15.display();

   fill(127,127,127);
  box16.display();

  fill(135,206,234);
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();

  fill(254,191,202);
  box22.display();
  box23.display();
  box24.display();
  
  fill(62,223,207);
  box25.display();
  
  ground1.display();
  base1.display();
  base2.display();
  sling1.display();

 
  imageMode(CENTER);
  image(polygonImg,polygon1.position.x,polygon1.position.y,40,40);

  box1.scoring();
  box2.scoring();
  box3.scoring();
  box4.scoring();
  box5.scoring();
  box6.scoring();
  box7.scoring();
  box8.scoring();
  box9.scoring();
  box10.scoring();
  box11.scoring();
  box12.scoring();
  box13.scoring();
  box14.scoring();
  box15.scoring();
  box16.scoring();
  box17.scoring();
  box18.scoring();
  box19.scoring();
  box20.scoring();
  box21.scoring();
  box22.scoring();
  box23.scoring();
  box24.scoring();
  box25.scoring();



}

function mouseDragged(){
Matter.Body.setPosition(this.polygon1,{x:mouseX,y:mouseY});
}

function mouseReleased(){
sling1.fly();
}

function keyPressed(){
  if(keyCode==32){
  sling1.attach(polygon1) 
  }
}

async function clock(){
var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
var res = await response.json();
var datetime = res.datetime;
var hr = datetime.slice(11,13);
console.log(hr)

if(hr>06 && hr<18){
  bg =  rgb(239, 147, 95)
}
else{
   bg = rgb(64, 10, 113);
}

}
