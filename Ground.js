class Ground {
    constructor(x, y, width, height) {
      var options = 
      {
          isStatic : true
      }

      this.x=x;
      this.y=y;
      this.width = width;
      this.height = height;

      ground = Bodies.rectangle(x, y, width, height , options );
      World.add(world, ground);
    }
      
     
    display(){
     // var pos =this.body.position;
      //var angle = this.body.angle;
      push();
     // translate(pos.x,pos.y);
      //rotate(angle);
      rectMode(CENTER);
      fill(255);
      rect(0,0, this.width, this.height);
      pop ();
    }
  }