class Scene {
    constructor(){
        this.div = document.createElement("div");
        this.div.className = "Scene";
        document.body.appendChild(this.div);
        this.hide();

        this.layers = [];
        this.layersCount = 0;
        
        this.index = SceneManager.addScene(this);
    }
    show(){
        this.div.style.display = "block";
    }
    hide(){
        this.div.style.display = "none";
    }
    addLayer(){
        this.layersCount++;
        let layer = new Layer(this);
        this.layers.push(layer);
        
        return layer;
    }
}