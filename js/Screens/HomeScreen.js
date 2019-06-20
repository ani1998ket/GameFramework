class HomeScreen extends Scene{
    constructor(){
        super();

        let button1 = new Image();
        button1.src = "assets/images/Glossy01.png";
        let button2 = new Image();
        button2.src = "assets/images/Glossy02.png";

        this.addNewLayer();
        this.background = this.getLayer(0);
        this.playButton = new ImageButton(this.background, button1, button2, new Vector2d(240 - 150, 200),  300, 50);
        this.playButton.onClick = () => {
            setTimeout(()=>{
                SceneManager.setCurrentScene(SceneManager.getScene(3));
            }, 1000);
        }
        this.render();
    }

    render(){
        let background = this.background;
        background.canvas.style.backgroundColor = "blue";
        this.playButton.render();
        background.context.fillRect(240 - 150, 300, 300, 50);
        background.context.fillRect(240 - 150, 400, 300, 50);
        background.context.fillRect(240 - 150, 500, 300, 50);
    }
}