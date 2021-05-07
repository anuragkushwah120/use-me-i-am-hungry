class Paper{
    constructor (x,y,r){
        var options={
			isStatic:false,
            restitution:0.3,
            density:1.2,friction:0

			} 
            this.x=x;
            this.y=y;
            this.r=r;
            this.image=loadImage("paper.png")
            this.body=Bodies.circle(x, y, r, options);
             World.add(world, this.body);
    }
    display()
	{
			
			var paperPos=this.body.position;		

			push()
			translate(paperPos.x, paperPos.y);
			//strokeWeight(4);
			imageMode(CENTER)
			image(this.image,0,0, this.r);
			pop()
			
	}

}
