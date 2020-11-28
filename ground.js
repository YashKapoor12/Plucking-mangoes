class Ground{
    constructor(x,y,width){
        var options={
            isStatic:true,
            restitution:1,
            friction:1
        }
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=10;
        this.body=Bodies.rectangle(x,y,width,10,options);
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        rect( 0, 0, this.width, this.height);
        pop()
    }
}