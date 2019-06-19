class LoadingScreen extends Scene{
    constructor(){
        super();
        this.addNewLayers(2);
        this.render();
        this.x = 0;
    }

    render(){
        let background = this.getLayer(0);
        let foreground = this.getLayer(1);

        background.canvas.style.backgroundColor = "black";
        background.context.fillStyle = "green";
        foreground.context.fillStyle = "pink";

        background.context.fillRect(240 - 150, 320 - 10, this.x, 20);
        foreground.context.fillRect(240 - 150, 320 - 10, this.x, 20);
        if( this.x < 300) this.x++;
    }
}
