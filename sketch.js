
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var chao
var bola
var quadrado
var quadrado1
var quadrado3
function preload()
{

}

function setup() {
	createCanvas(800, 700);
   

	engine = Engine.create();
	world = engine.world;

  

  var chao_options = {
  	isStatic : true

  }

   var quadrado1_options = {
    
    frictionAir : 0.03,
    
  
    }

   var quadrado2_options = {
    
      frictionAir : 0.5,
          
      }
      
      var quadrado3_options = {
    
        frictionAir : 0.16,
        
      
        } 
	//Crie os Corpos Aqui.

	Engine.run(engine);

	chao = Bodies.rectangle(800,610,-1300,25,chao_options)
	World.add(world,chao)

  quadrado1 = Bodies.rectangle(260,100,80,80,quadrado1_options)
	World.add(world,quadrado1)
  
  quadrado2 = Bodies.rectangle(180,200,80,160,quadrado2_options)
	World.add(world,quadrado2)

  quadrado3 = Bodies.rectangle(300,200,160,80,quadrado3_options)
	World.add(world,quadrado3)
}



function draw() {
  rectMode(CENTER);
  background(0);
  drawSprites();
  Engine.update(engine);

  rect(quadrado1.position.x,quadrado1.position.y,80,80);

  rect(quadrado2.position.x,quadrado2.position.y,80,160);

  rect(quadrado3.position.x,quadrado3.position.y,160,80);


  rect(chao.position.x,chao.position.y,-1800,25);

 
}



