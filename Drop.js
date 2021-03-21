class Drop{
    constructor(x,y){
        friction: 0.1


        Matter.Bodies.circle(x, y, 30);
    }

    

    push(){
var maxDrops=100;
for(var i=0; i<maxDrops;++){
    maxDrops.push(new createDrop(random(0,400), random(0,400)));
}
    }

    update(){
        
    }
        
    }
