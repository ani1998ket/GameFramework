class LoadingScreen extends Scene{
    constructor(){
        super();
        let background = this.addLayer();
        background.canvas.style.backgroundColor = "black";
        background.context.fillStyle = "green";
        let x = 0;
        let loop = window.setInterval(function(){
            background.context.fillRect(240 - 150, 320 - 10, x, 20);
            x++;
            if( x > 300)  window.clearInterval(loop);
        }, 1000/60);
        
    }
}
