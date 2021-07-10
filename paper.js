class Paper{
constructor (x,y){

    var options={
        isStatic:false,	
        restitution:0.3,
        friction:0.5,
        density:1.2,
        }
        this.image=loadImage("paper.png");
    this.x=x;
    this.y=y;
    this.r=20;
    this.body=Bodies.circle(x, y,20, options);
     World.add(world, this.body);

}
display()
{
        
        var Pos=this.body.position;		

        push()
        translate(Pos.x,Pos.y);
        ellipseMode(RADIUS)
        imageMode(CENTER);
        fill(128,128,128)
        ellipse(0,0,this.r, this.r);
        pop()
        
}






}









