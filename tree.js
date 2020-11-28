class Tree{
    constructor(x,y){
		this.x=x;
		this.y=y;
		this.dustbinWidth=200;
		this.dustbinHeight=100;
		this.wallThickness=20;	
		
		this.image=loadImage('Plucking mangoes/tree.png');
		this.bottomBody=Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness, {isStatic:true})
		this.leftWallBody=Bodies.rectangle(this.x-this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
		

		this.rightWallBody=Bodies.rectangle(this.x+this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
		World.add(world, this.bottomBody)
		World.add(world, this.leftWallBody)
		World.add(world, this.rightWallBody);
    }
    display(){
        var pos=this.body.position;
        push()
        translate(pos.x, pos.y+10);
        imageMode(CENTER)
        fill(255)
        stroke(255)
        rotate(this.angle)
        image(this.image,0,-this.dustbinHeight/2,this.dustbinWidth, this.dustbinHeight);
        pop()
    }
}