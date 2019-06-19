class LogoScreen extends Scene{
    constructor(){
        super();
        let background = this.addLayer();
        background.canvas.style.backgroundColor = "yellow";
        background.context.fillRect(240 - 150, 320 - 25, 300, 50);
    }
}
