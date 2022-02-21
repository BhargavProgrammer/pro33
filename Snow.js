class Snow{
    constructor(x,y){
        var options = {
            'isStatic': false,
            'friction': 0.5,
            'density' : 1,
        }
        this.snow = Bodies.rectangle(x,y,10,10,options);
        this.image = loadImage("snow4.jpg");

    }
    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, 10, 10);
        pop();
      }
}