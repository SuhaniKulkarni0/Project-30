const Engine = Matter.Engine;
const World= Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload(){
  polyImg = loadImage("polygon.png")
}

function setup() {

    var canvas =  createCanvas(800,600)
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);

    ground = new Ground (400,400,100,50)

    block1 = new Block(300, 275, 30,40)
    block2 = new Block(330, 275, 30,40)
    block3 = new Block(360,275, 30,40)
    block4 = new Block(390,275, 30,40)
    block5 = new Block(420,275, 30,40)
    block6 = new Block(450,275, 30,40)
    block7 = new Block(480,275, 30,40)

    block8 = new Block(330, 235, 30,40)
    block9 = new Block(360,235, 30,40)
    block10 = new Block(390,235, 30,40)
    block11 = new Block(420,235, 30,40)
    block12  = new Block(450,235, 30,40)

    block13 = new Block(360,195,30,40)
    block14 = new Block(390,195,30,40)
    block15 = new Block(420,195,30,40)

    block16 = new Block(260,155,30,40)

    polygon = new Polygon(50,200,25)

    
    slingshot = new SlingShot(polygon.body,{x:100,y:200});


}

function display(){

    block1.display()
    block2.display()
    block3.display()
    block4.display()
    block5.display()
    block6.display()
    block7.display()
    block8.display()
    block9.display()
    block10.display()
    block11.display()
    block12.display()
    block13.display()
    block14.display()
    block15.display()
    block16.display()

    ground.display()

    slingshot.display()
    polygon.display()

}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
   }

function mouseReleased(){
  slingshot.fly();
  } 
  
function keyPressed(){
    if(keyCode===32){
      slingshot.attach(this.polygon);
    }
  }