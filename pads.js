function Pads() {
    this.x = random(width);
    this.y = random(height);
    this.w = random(40, 80);
    this.turn = random(0, 360);
    this.xspeed = random(-0.25, 0.25);
    this.yspeed = random(-0.25, 0.25);
    
    this.mouseClicked = function() {
        blueGill++;
    }
    
    this.move = function() {
        this.x += this.xspeed;;
        this.y += this.yspeed;
        
    }
    
    this.edges = function() {
        if(this.x > width || this.x < 0) {
            this.xspeed *= -1;
        }
        if (this.y > height || this.y < 0) {
            this.yspeed *= -1;
        }
    }
    
    this.show = function() {
        angleMode(DEGREES);
        fill('green');
        arc(this.x, this.y, this.w, this.w, 0, 315);
    }
}