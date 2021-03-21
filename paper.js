class paper
{
	constructor(x,y){

	
	var options = {
		restitution:0.8,
		density : 0.5,
		friction:0.3
	}
	this.radius = 100;
  this.body = Bodies.circle(x,y,100,options);
  this.image = loadImage("paper.png")
  World.add(world,this.body);
}
display(){
	var pos = this.body.position;
	var angle = this.body.angle;
	push();
	translate(pos.x,pos.y);
	rotate(angle)
	imageMode(CENTER)
	image(this.image,0,0,this.radius);
	pop();
}
}