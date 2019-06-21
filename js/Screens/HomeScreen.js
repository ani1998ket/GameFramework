class HomeScreen extends Scene{
    constructor(){
        super();

        let button1u = new Image();
        let button1d = new Image();
        let button2u = new Image();
        let button2d = new Image();
        let button3u = new Image();
        let button3d = new Image();
        let button4u = new Image();
        let button4d = new Image();

        button1u.src = "assets/images/Glossy01.png";
        button1d.src = "assets/images/Glossy02.png";
        button2u.src = "assets/images/Glossy03.png";
        button2d.src = "assets/images/Glossy04.png";
        button3u.src = "assets/images/Glossy05.png";
        button3d.src = "assets/images/Glossy06.png";
        button4u.src = "assets/images/Glossy07.png";    
        button4d.src = "assets/images/Glossy08.png";
            
        this.addNewLayer();
        this.background = this.getLayer(0);
        this.playButton = new ImageButton(this.background, button1u, button1d, new Vector2d(GAME_WIDTH/2 - 150, 200),  300, 50);
        this.settingsButton = new ImageButton(this.background, button2u, button2d, new Vector2d(GAME_WIDTH/2 - 150, 300),  300, 50);
        this.highScoreButton = new ImageButton(this.background, button3u, button3d, new Vector2d(GAME_WIDTH/2 - 150, 400),  300, 50);
        this.creditsButton = new ImageButton(this.background, button4u, button4d, new Vector2d(GAME_WIDTH/2 - 150, 500),  300, 50);
        this.playButton.onClick = () => {
            setTimeout(()=>{
                SceneManager.setCurrentScene(SceneManager.getScene(3));
            }, 1000);
        }
        this.render();
    }

    render(){
        let background = this.background;
        background.canvas.style.backgroundColor = "turquoise";
        this.playButton.render();
        this.settingsButton.render();
        this.highScoreButton.render();
        this.creditsButton.render();
        
    }
}