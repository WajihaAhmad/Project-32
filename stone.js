class Stone{
    constructor(x, y, r){
        var options = {
            isStatic:false,
            restitution:0.5,
            friction:0.3,
            density:1.2
        }
        this.x=x
        this.y=y
        this.r=r
        this.body=Bodies.circle(this.x,this.y,this.r,options)
        World.add(world,this.body);
    }
    
    display(){
        fill('blue')
        var paperposition=this.body.position
        push()
        translate(paperposition.x,paperposition.y)
        rectMode(CENTER)
        strokeWeight(3);
        fill(255,0,255)
        ellipse(0,0,this.r,this.r);
        pop()
    
    }
    }