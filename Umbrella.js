class Umbrella {
    constructor(x,y){
        this.image = loadImage("images/man--umbrella.png");

        Matter.Bodies.circle(x, y, 30);
    }

display() {
    image(this.image, 0, 0, this.width<30, this.height<50);
}
}