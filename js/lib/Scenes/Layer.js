let aspectRatio = window.innerWidth / window.innerHeight; 
aspectRatio = (aspectRatio <= 1) ? aspectRatio : (9 / 16);
class Layer{
    constructor(scene, width = 480, height = 854){
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
        
        this.div.appendChild(this.canvas)
        scene.div.appendChild(this.div);
    }
    show(){
        this.div.style.display = "block";
    }
    hide(){
        this.div.style.display = "none";
    }
}