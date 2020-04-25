


import heartImg  from "../../assets/images/heart.png";
import starImg  from "../../assets/images/star.png";


export default function sketch(p) {

    var canvas;
    var timer = 0;
    var timer2 = 0;
    let val = 0.5;
    var content = [];
    var tempContent = [];
    var Heart;
    var Star;

    class randItem {
      constructor(content, x, y) {
        
        this.cont = content; 
        this.x = x;
        this.y = y;
        this.dirX = p.random(-5,10);
        this.dirY = p.random(-5,10);
        this.way = p.random(0,2);
        this.c =  p.color(p.random(0,255), p.random(0,255), p.random(0,255)); 
        this.timer = 0;
      }
     
       move() {
          
          if(this.way < 1) {
            this.x =  this.x + this.dirX;
            this.y = this.y - this.dirY
          } else if( this.way < 2) {
            this.x =  this.x + this.dirX + this.dirX;
            this.y = this.y + this.dirY
          } else {
            this.x =  this.x - this.dirX + this.dirX;
            this.y = this.y + this.dirY
          }

       };
   
       show() {
         p.strokeWeight(0)        
      
         if (p.millis() >= 300+this.timer) {
          this.timer = p.millis();
          this.c = p.color(p.random(0,255), p.random(0,255), p.random(0,255)); 
        }
        
         p.fill(this.c); 

         if(this.cont < 1) {
          p.ellipse(this.x, this.y, 30);

         } else if(this.cont < 2) {
          
          p.textSize(24);
          
          if(this.dirX < 4) {
            p.rect(this.x, this.y, 50, 50);
          } else {
            p.image(Star, this.x, this.y, 50, 50);
          }
          
         } else if(this.cont < 3) {
           p.rect(this.x, this.y, 50, 50);
         } else if(this.cont < 4) {
           p.image(Heart, this.x, this.y, 50, 50);
         } else {
          p.image(Star, this.x, this.y, 50, 50);
         }
         
       };    

    }

    p.setup = () => {
      canvas = p.createCanvas(p.windowWidth, p.windowHeight);
      Heart = p.loadImage(heartImg);
      Star = p.loadImage(starImg);
      
    }
  
    //Draws every item on the canvas
    p.draw = () => {
       p.background(209, 166, 102);
    
      if (p.millis() >= 50+timer) {
        timer = p.millis();
        content.push(new randItem(p.random(0,5), p.mouseX, p.mouseY));
      }
      for(let i = 0; i < content.length; i++) {
          content[i].show();
          content[i].move();
      }
      if(content.length > 100) {
        content.splice(1, 50)
      }
     
    }


    p.myCustomRedrawAccordingToNewPropsHandler = (newProps) => {
      if(canvas) {
    
       // p.fill(newProps.color);

      }
    }
}