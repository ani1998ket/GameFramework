class Bird extends GameObject{
    update(){
        super.update();
        if(this.position.y > 854) {
            this.position.y = 854;
            this.velocity = this.velocity.scale(1, -1);
        }
        this.acceleration = new Vector2d(0, GRAVITY);
    }
}

