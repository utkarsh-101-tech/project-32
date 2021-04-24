class Shot{
    constructor(bodyA, pointB){ 
        var option={ 
            bodyA: bodyA,
            pointB: pointB, 
            stiffness: 0.04, 
            length: 5 } 

            this.pointB = pointB; 
            this.body = Constraint.create(option);
             World.add(world, this.body);
    
    }
  
    attach(body){
		this.body.bodyA=body;
	}
    
    fly(){
        this.body.bodyA = null;
    }
        
    display(){
        
        if(this.body.bodyA){
var pintA=this.body.bodyA.position;
    var pointB=this.pointB;
            
    strokeWeight(4);  
     fill("blue");       
    line(pintA.x,pintA.y,pointB.x,pointB.y);
    
}}}


