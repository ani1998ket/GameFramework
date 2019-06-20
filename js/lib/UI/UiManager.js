class UIManager{
    constructor(){
        this.buttons = [];
        this.buttonCount;
    }
    addButton(button){
        this.buttons.push(button);
        button.index = this.buttonCount;
        this.buttonCount++;
    }
    getButton(index){
        return this.buttons[index];
    }
    handleClick(e){
        let scaleY = window.innerHeight / GAME_HEIGHT;
        let scaleX = (aspectRatio * window.innerHeight) / GAME_WIDTH;
        let clickX = e.pageX / scaleX;
        let clickY = e.pageY / scaleY;

        for(let index in this.buttons){
            let button = this.getButton(index);
            if(clickX > button.position.x && clickX < button.position.x + button.width){
                if(clickY > button.position.y && clickY < button.position.y + button.height){
                    button.isPressed = true;
                    setTimeout(()=>{
                        button.isPressed = false;
                    }, 500);
                    button.onClick();
                    break;
                }
            }
        }
    }
}