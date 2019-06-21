class Scene {
    constructor(){
        this.layerManager = new LayerManager();

        this.div = document.createElement("div");
        this.div.className = "Scene";
        document.body.appendChild(this.div);
        this.hide();
        
        this.index = SceneManager.addScene(this);

        this.uiManager = new UIManager();
    }
    show(){
        this.div.style.display = "block";
    }
    hide(){
        this.div.style.display = "none";
    }
    addNewLayer(){
        let layer = new Layer(this);
        this.layerManager.addLayer(layer);
        return layer;
    }
    addNewLayers(n = 1){
        if(n > 0)
            for(let i = 0; i < n; i++) 
                this.addNewLayer();
    }
    getLayer(index){
        return this.layerManager.getLayer(index);
    }
    render(){
        
    }
    update(){
        
    }
}