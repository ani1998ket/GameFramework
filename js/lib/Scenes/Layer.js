
class Layer{
    constructor(scene, width = GAME_WIDTH, height = GAME_HEIGHT){
        this.div = document.createElement("DIV");
        this.div.className = "Layer";
        this.canvas = document.createElement("CANVAS");
        this.canvas.style.height = "100vh";
        this.canvas.style.width = `${aspectRatio * 100}vh`;

        this.canvas.className = "LayerCanvas";
        this.canvas.width = width;
        this.canvas.height = height;
        this.context = this.canvas.getContext("2d");
        this.div.style.position = "absolute";
        this.div.style.zIndex = scene.layersCount - 1;
        this.scene = scene;
        
        this.div.appendChild(this.canvas);
        this.scene.div.appendChild(this.div);
    }
    show(){
        this.div.style.display = "block";
    }
    hide(){
        this.div.style.display = "none";
    }
}