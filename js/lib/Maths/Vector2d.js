class Vector2d{
    constructor(x = 0, y = 0){
        this.x = x;
        this.y = y;
    }

    lengthsqaured(){
        return this.dot(this);
    }
    length(){
        return Math.sqrt(this.lengthsqaured());
    }
    normalise(){
        let length = this.length();
        if(length){
            return new Vector2d(this.x / length, this.y / length );
        }else{
            return this;
        }
    }
    negative(){
        return new Vector2d(-this.x, -this.y);
    }
    add(vec){
        return new Vector2d(this.x + vec.x, this.y + vec.y);
    }
    subtract(vec){
        return this.add(vec.negative());
    }   
    scale(a = 1, b = 1){
        return new Vector2d(a * this.x, b * this.y);
    }
    dot(vec){
        return ((this.x * vec.x) + (this.y * vec.y));
    }
    cross(vec){
        return ((this.x * vec.y) - (this.y * vec.x));
    }
}