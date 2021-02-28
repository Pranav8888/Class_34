const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball, slingshot;

var block1, block2, block3, block4, block5, block6, block7,block8;
var block1a, block2a, block3a, block4a, block5a, block6a, block7a,block8a;
var block1b, block2b, block3b, block4b, block5b, block6b, block7b,block8b;
var block1c, block2c, block3c, block4c, block5c, block6c, block7c,block8c;
var block1d, block2d, block3d, block4d, block5d, block6d, block7d,block8d;

function preload() {
    
}

function setup(){
    var canvas = createCanvas(1200,900);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    ball = new Ball(200,50, 50);

    slingshot = new SlingShot(ball.body,{x:300, y:50});

    block1 = new Block(600,870,100,100);
    block2 = new Block(600,770,100,100);
    block3 = new Block(600,670,100,100);
    block4 = new Block(600,570,100,100);
    block5 = new Block(600,470,100,100);
    block6 = new Block(600,370,100,100);
    block7 = new Block(600,270,100,100);
    block8 = new Block(600,170,100,100);

    block1a = new Block(700,870,100,100);
    block2a = new Block(700,770,100,100);
    block3a = new Block(700,670,100,100);
    block4a = new Block(700,570,100,100);
    block5a = new Block(700,470,100,100);
    block6a = new Block(700,370,100,100);
    block7a = new Block(700,270,100,100);
    block8a = new Block(700,170,100,100);

    block1b = new Block(800,870,100,100);
    block2b = new Block(800,770,100,100);
    block3b = new Block(800,670,100,100);
    block4b = new Block(800,570,100,100);
    block5b = new Block(800,470,100,100);
    block6b = new Block(800,370,100,100);
    block7b = new Block(800,270,100,100);
    block8b = new Block(800,170,100,100);

    block1c = new Block(900,870,100,100);
    block2c = new Block(900,770,100,100);
    block3c = new Block(900,670,100,100);
    block4c = new Block(900,570,100,100);
    block5c = new Block(900,470,100,100);
    block6c = new Block(900,370,100,100);
    block7c = new Block(900,270,100,100);
    block8c = new Block(900,170,100,100);

    block1d = new Block(1000,870,100,100);
    block2d = new Block(1000,770,100,100);
    block3d = new Block(1000,670,100,100);
    block4d = new Block(1000,570,100,100);
    block5d = new Block(1000,470,100,100);
    block6d = new Block(1000,370,100,100);
    block7d = new Block(1000,270,100,100);
    block8d = new Block(1000,170,100,100);

}

function draw(){
background(51);
    Engine.update(engine);
    strokeWeight(4);
    block1.display();
    block2.display();   
    block3.display();
    block4.display(); 
    block5.display();
    block6.display();   
    block7.display();
    block8.display(); 

    block1a.display();
    block2a.display();   
    block3a.display();
    block4a.display(); 
    block5a.display();
    block6a.display();   
    block7a.display();
    block8a.display(); 

    block1b.display();
    block2b.display();   
    block3b.display();
    block4b.display(); 
    block5b.display();
    block6b.display();   
    block7b.display();
    block8b.display(); 

    block1c.display();
    block2c.display();   
    block3c.display();
    block4c.display(); 
    block5c.display();
    block6c.display();   
    block7c.display();
    block8c.display(); 
    
    block1d.display();
    block2d.display();   
    block3d.display();
    block4d.display(); 
    block5d.display();
    block6d.display();   
    block7d.display();
    block8d.display(); 

    ground.display();

    ball.display();
    
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});   
}


