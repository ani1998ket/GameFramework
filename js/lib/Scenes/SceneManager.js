class SceneManager{
    constructor(){
    }
    static addScene(scene){
        SceneManager.scenes.push(scene);
        let index = SceneManager.sceneCount;
        SceneManager.sceneCount++;

        return index;
    }   
    static getScene(index){
        return this.scenes[index];
    } 
    static setCurrentScene(scene){
        if( SceneManager.getCurrentScene())
        SceneManager.getCurrentScene().hide();
        SceneManager.currentScene = scene.index;
        SceneManager.getCurrentScene().show();
    }
    static getCurrentScene(){
        return SceneManager.scenes[SceneManager.currentScene];
    }
    static gameLoop(){
        let currentScene = SceneManager.getCurrentScene();
        if(currentScene){
            currentScene.update();
            currentScene.render(); 
        }
        requestAnimationFrame(SceneManager.gameLoop);
    }
}

SceneManager.scenes = [];
SceneManager.sceneCount = 0;
SceneManager.currentScene;
SceneManager.gameLoop();