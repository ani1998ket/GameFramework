
class LayerManager{
    constructor(){
        this.layers = [];
        this.layerCount = 0;
    }
    addLayer(layer){
        this.layers.push(layer);
        layer.index = this.layerCount;
        this.layerCount++;
    }    
    getLayer(index){
        return this.layers[index];
    }
}
