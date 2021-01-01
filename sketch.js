
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var tree,ground,boy,stone;
//var Mango1 Mango2 Mango3 Mango4 Mango5 Mango6;
function preload()
{
    boy=loadImage("boy.png");
	tree = loadImage("tree.png"); 
}

function setup() {
	createCanvas(1300, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree = new Tree(1000,700);
	ground = new Ground(700,650,1500,40);
	//boy = new Boy(100,420);
    stone = new Stone(100,78,60);

	Mango1=new Mango(1100,100,30);
	Mango2=new Mango(1170,130,30);
	  Mango3=new Mango(1010,140,30);
	  Mango4=new Mango(1000,70,30);
	  Mango5=new Mango(1100,70,30);
	  Mango6=new Mango(1000,230,30);
	launcherObject=new launcher(stone.body,{x:235,y:420})


	Engine.run(engine);
}


function draw() {
	rectMode(CENTER);
    background('white');
	textSize(25);
	text("Press Space to get a second Chance to Play!!",50 ,50);
	image(boy ,200,340,200,300);
	tree.display();
	//boy.display();
	
	
 
 Mango1.display();
 Mango2.display();
 Mango3.display();
 Mango4.display();
 Mango5.display();
 Mango6.display();
 stone.display();
	ground.display();
	launcherObject.display();
   detectCollision(stone ,Mango1);
   detectCollision(stone, Mango2);
   detectCollision(stone, Mango3);
   detectCollision(stone ,Mango4);
   detectCollision(stone, Mango5);


   drawSprites();
   
  }

  function detectCollision (lstone, lMango){
 MangoBodyPosition =  lMango.body.position;
	stoneBodyPosition = lstone.body.position;
	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y ,MangoBodyPosition.x ,MangoBodyPosition.y);
	if(distance<= lMango.r+lstone.r);
	{
	  Matter.Body.setStatic( lMango.body,false);
	}
   }

   function mouseDragged()
   {
	   Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY}) 
   }
   
   function mouseReleased()
   {
	   launcherObject.fly();
	 
   }
   
   function keyPressed() {
	   if (keyCode === 32) {
	   Matter.Body.setPosition(stone.body, {x:235, y:420}) 
		 launcherObject.attach(stone.body);
	   }
	 }