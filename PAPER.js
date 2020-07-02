class paper{
    constructor(x,y,radius){
        var options={
            isStatic:false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2

        }
        this.body=Bodies.circle(x,y,radius,options);
        this.width=width;
        this.height=height;
        this.radius=radius;
        World.add(world,this.body);
    }
    display(){
        ellipseMode(CENTER);
        fill(255);
        ellipse(this.body.position.x,this.body.position.y,this.body.radius);
    }
};