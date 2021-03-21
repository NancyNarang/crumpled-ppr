
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, paperObject,groundObject	
var world;


function setup() {
	createCanvas(1600, 700);
	
	//rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	paperObject=new paper(100,200,80);
	groundObject=new ground(width/2,700,width,40);
	dustbinObj=new dustbin(1200,605,20,150);
	dustbinObj2=new dustbin(900,605,20,150);
	dustbinObj3=new dustbin(1050,670,280,20);
	//Create a Ground
	

	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1600,
	    height: 700,
	    wireframes: false
	  }
	});

	Engine.run(engine);
	Render.run(render);
  
}


function draw() {
  //rectMode(CENTER);
  background(230);
 
  
  paperObject.display();
  groundObject.display();
  dustbinObj.display();
  dustbinObj2.display();
  dustbinObj3.display();
  
 
  
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:470,y:-150});

    
  	}
}





