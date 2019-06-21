class GameObject{
    constructor(layer, position = new Vector2d(), width, height){
        this.world;
        
        this.layer = layer;
        this.position = position;
        this.velocity = new Vector2d();
        this.acceleration = new Vector2d(0, 0);
        this.width = width;
        this.height = height;
    }   
    update(){
        this.position = this.position.add(this.velocity.scale(1, 1));
        this.velocity = this.velocity.add(this.acceleration.scale(1, 1));
    } 
    render(){
        this.fillStyle = "black";
        this.layer.context.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
}