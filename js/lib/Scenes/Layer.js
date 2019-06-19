class Layer{
    constructor(scene, width = 480, height = 640){
        this.div = document.createElement("DIV");
        this.canvas = document.createElement("CANVAS");
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