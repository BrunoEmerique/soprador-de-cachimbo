class BlowerMouth {
  constructor(x, y, w, h) {
    let options = {
      isStatic: true
    };

    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    this.color = color;
    World.add(world, this.body);
    this.body = createImg('caximbo-removebg-preview.png');
    this.body.position(150,120)
    this.body.size(200,200)
  }

  show() {
    let pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    rectMode(CENTER);
    fill("#8d6e63");
    rect(0, 0, this.w, this.h);
    pop();
  }
}
