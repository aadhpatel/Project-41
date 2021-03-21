var umbrella;

function preload(){
    
}

function setup(){
    createCanvas(600, 1000);
    

    umbrella=new Umbrella(100,200,10,50);
}

function draw(){
    umbrella.display();

    
}   

