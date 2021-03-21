class dustbin
{
	constructor(x,y,width,height)
	{
		var options={
			isStatic:true
				
			}
		
		this.width=width;
		this.height=height;
		this.body=Bodies.rectangle(x, y, width, height , options);
		this.image = loadImage("dustbingreen.png")
 		World.add(world, this.body);

	}
	display()
	{
			
			var pos=this.body.position;		

			push();
			translate(pos.x, pos.y);
			imageMode(CENTER)
			//strokeWeight(4);
			fill(128,128,128)
			image(this.image,0,0,this.width, this.height);
			pop();
			
	}

}