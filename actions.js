var dias = [];

function setup() {
    var cv=createCanvas(displayWidth-64, displayHeight);
    cv.parent("main");
    for (var i = 0; i<30; i++) {
        dias.push(new Dia(i,10+i,10+i*2));
    }
}

function draw() {
    background('#fff');
    showDays();
}


function showDays() {
    for (var i=0; i<dias.length; i++) {
        dias[i].display();
    }
}


// dia class
class Dia {
    constructor(data,locx,locy) {
      this.data = data;
      //this.sorrisos = sorrisos;
      this.size = 50;
      this.locx = locx;
      this.locy = locy;
    }
  
    display() {
      fill('#000');
      rect(this.locx, this.locy, this.size, this.size);
    }
  }