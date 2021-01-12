class Polygon{

    constructor(x,y,radius,angle){

        this.radius = radius
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.circle(50,200,20,options)
        World.add(world, this.body)
    }

    display(){
        var angle = this.body.angle;
        var pos = this.body.position
        push();
        
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER)
        image(polyImg, pos.x, pos.y,40,40)
        //ellipse( 0, 0, this.radius);
        pop();
        

    }
}