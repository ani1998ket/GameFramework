class World{
    constructor(scene){
        this.gameObjects = [];
        this.gameObjectsCount = 0;

        this.scene = scene;
    }
    addGameObject(object){
        this.gameObjects.push(object);
        object.index = this.gameObjectsCount;
        this.gameObjectsCount++;
    }
    getGameObject(index){
        return this.gameObjects[index];
    }
    removeGameObject(index){

    }
    render(){
        for(let index in this.gameObjects){
            this.getGameObject(index).render();
        }
    }
    update(){
        for(let index in this.gameObjects){
            this.getGameObject(index).update();
        }
    }
}