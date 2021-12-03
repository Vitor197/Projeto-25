class Papel {
    constructor(bodyA,bodyB){
    var options={
        isStatic:false,
        rstituion:0.3,
        friction:0,
        density:1.2,
    }
    this.image=loadImage("paper.png");
    this.body = Bodies.circle(x, y, 10, options, this.height);
        this.width = width;
        this.height = height;
        
        World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}