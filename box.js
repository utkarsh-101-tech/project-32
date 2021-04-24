class Box{
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.1,
            'friction':1.0,
            'density':0.5
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.visiblity=255;
        World.add(world, this.body);
      }
      
      display(){
        if(this.body.speed < 3){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        
        stroke("black");
        strokeWeight(2);
        rect(0,0,this.width,this.height);
        pop();
      }
      else{
        World.remove(world,this.body);
        push();
        this.visiblity=this.visiblity-3;
        tint(255,this.visiblity);
        //rect(this.body.position.x,this.body.position.y,this.width,this.height);
        pop();
      }
}


scoring(){
  if(this.visiblity<0 && this.visiblity >-105){
  score++;
  }
}
}
