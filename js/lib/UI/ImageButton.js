class ImageButton{
    constructor(layer, buttonUp, buttonDown, position = new Vector2d(), width = 100, height = 50){
        this.buttonUp = buttonUp;
        this.buttonDown = buttonDown;
        this.width = width || buttonUp.width;
        this.height = height || buttonUpheight;
        this.position = position;
        this.isPressed = false;
        this.layer = layer;

        this.layer.scene.uiManager.addButton(this);
    }
    render(){
        
        let image = this.buttonUp;
        if(this.isPressed) {
            image = this.buttonDown;
            this.layer.context.fillStyle = "white";
        }
        if(image)
            this.layer.context.drawImage(image, 
                this.position.x, this.position.y,
                this.width, this.height);
        else{
            this.layer.context.fillRect( 
                this.position.x, this.position.y,
                this.width, this.height);
        }

        this.layer.context.fillStyle = "black"
    }
    onClick(){

    }
}