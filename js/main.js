let logoScreen = new LogoScreen();
let loadingSceeen = new LoadingScreen();
let homeScreen = new HomeScreen();
let gameScreen = new GameScreen();
 
window.onload = () => {
    SceneManager.setCurrentScene(logoScreen);
    console.log(SceneManager.getCurrentScene());

    //sets active scene to loading Screen after 3 seconds
    setTimeout(function(){
        SceneManager.setCurrentScene(loadingSceeen);
        console.log(SceneManager.getCurrentScene());
    }, 2000);

    //sets active scene to loading Screen after 4 seconds
    setTimeout(function(){
        SceneManager.setCurrentScene(homeScreen);
        console.log(SceneManager.getCurrentScene());
    }, 5000);

}
