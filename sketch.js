
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200,200);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	box1 = new Box(890,150,20,110);
	box2 = new Box(950,170,140,20);
	box3 = new Box(1010,150,20,110);
	round = new Ground(600,190,1200,20);

	var ball_options = {
		restitution : 0.8,
		isStatic : true,
		friction : 0.5,
		density : 1.2
	}
		fill("white");
		
		ball = Bodies.circle(300,165,30,ball_options);
		World.add(world, ball);
		
    


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  
  background(0);
  Engine.update(engine);
  ellipseMode(CENTER);
  ellipse(ball.position.x,ball.position.y,30,30);



  keyPressed();

  box1.display();
  box2.display();
  box3.display();

  round.display();
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){

Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});

	}
}


