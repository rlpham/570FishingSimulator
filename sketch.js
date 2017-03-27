var p = [];
var blueGill = 0;
var bass = 0;
var walter = 0;
var musky = 0;

function mouseClicked() {
    if(this.fishRound>40) {
        blueGill++;
        console.log('Blue Gill: ' + this.rounded + 'lbs.');
    }else if (this.fishRound <= 39 && this.fishRound >=15) {
        bass++;
        console.log('Bass: ' + this.rounded + 'lbs.');
    }else if(this.fishRound <= 14 && this.fishRound >=5) {
        walter++;
        console.log('Walter: ' + this.rounded + 'lbs.');
    }else {
        musky++;
        console.log('Musky: ' + this.rounded + 'lbs.');
    }
}

function setup() {
    createCanvas(1000, 600);
    for (var i = 0; i < 20; i++) {
        p.push(new Pads());
    }
}

function draw() {   
    background('#87CEFA');
    
    textSize(32);
    fill('white');
    text('Blue Gill: ', 25, 50);
    text('Bass: ', 25, 100);
    text('Walter: ', 25, 150);
    text('Musky: ', 25, 200);
    text(blueGill, 165, 50);
    text(bass, 115, 100);
    text(walter, 130, 150);
    text(musky, 135, 200);
    
    this.fish = random(1, 101);
    this.fishRound = Math.round(this.fish);
    this.weight = random(1, 10);
    this.rounded = Math.round(weight * 10) / 10;
    
    for (var i = 0; i < p.length; i++) {
        p[i].move();
        p[i].edges();
        p[i].show();
    }   
    
    
    
}
