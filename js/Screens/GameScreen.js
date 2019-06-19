
let bird = {
    position : {
        x : 50,
        y : 320
    },
    velocity : {
        x : 0,
        y : 0
    },
    acceleration : {
        x : 0,
        y : 1
    },
    width : 20,
    height : 20,
};
class GameScreen extends Scene{
    constructor(){
        super();
        this.addNewLayers(3);
    }

    update(){
        let playerLayer = this.getLayer(2);  
        bird.position.x += bird.velocity.x;
        bird.velocity.x += bird.acceleration.x;
        bird.position.y += bird.velocity.y;
        bird.velocity.y += bird.acceleration.y;

        if(bird.position.y > playerLayer.canvas.height){
            bird.position.y = playerLayer.canvas.height;
            bird.velocity.y -= 50;
        }
    }

    render(){
        let background = this.getLayer(0);
        let pipeLayer = this.getLayer(1);
        let playerLayer = this.getLayer(2);

        background.canvas.style.backgroundColor = "blue";
        playerLayer.context.clearRect(0, 0, playerLayer.canvas.width, playerLayer.canvas.height);
        playerLayer.context.fillRect(bird.position.x, bird.position.y, bird.width, bird.height);

        
    }


}