
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score = 0;
var ground,invisible;
var survivalTime = 0;
var ground,invisible;
var GameState;
var PLAY,END;
var end;


  

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  
PLAY = 1;
GameState = PLAY;
  END = 0;
  
  FoodGroup = new Group();
  obstacleGroup = new Group();
  
  
 monkey=createSprite(70,370,50,50);
  monkey.addAnimation("running",monkey_running)
  monkey.scale = 0.1;
  
  ground=createSprite(250,405,1000,10);
  ground.x = ground.width/2;
  
  invisible=createSprite(250,407,1000,10);
  invisible.x = ground.width / 2;
  
  
}


function draw() {
  createCanvas(500,500);
background("white");
  
  if(GameState === PLAY){
    
    //reset the ground
    if(ground.x < 0){
ground.x = ground.width / 2;
      
    }
    
    if (invisible.x < 0){
      invisible.x = invisible.width / 2;
      
      invisible.velocityX = -5;
}
    if(keyDown("space")&& monkey.isTouching(ground)){
      monkey.velocityY = -20;
    }
    score= Math.round(frameCount / 3);
    survivalTime = Math.ceil(frameCount / frameRate());
    ground.velocityX = -(5 + 2 * score / 100);
    
    if (monkey.isTouching(FoodGroup)){
FoodGroup.destroyEach();
    }
    
  }

  
  if(monkey.isTouching(obstacleGroup)){
    GameState = END;
    
}
  if(GameState === END){
ground.velocityX = 0;
    invisible.velocityX = 0;
    obstacleGroup.setVelocityXEach(0);
    FoodGroup.setVelocityXEach(0);
    
    FoodGroup.setLifeTimeEach(-1);
    obstacleGroup.setLifeTimeEach(-1)
    
    
  }
  
  monkey.velocityY = monkey.velocityY + 0.9;
  
  monkey.collide(invisible);
  
  stroke("black");
  textSize(20);
  fill("black");
  text("Score:" + score,400,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survivalTime:" + survivalTime,100,50);
  
  drawSprites();

  function food(){
    if (frameCount % 80 === 0){
     var banana = createSprite(500,10,10,20);
      banana.addImage("banana",bananaImage);
      banan.velocityX = -(5 + 2 * score / 100);
      banana.y = Math.round(random(120,200));
      banana.scale = 0.1
      FoodGroup.add(banana);
      FoodGroup.setLifeTimeEach(100);
      banana.setCollider("rectangle",0,0,400,400);
      }
  }
    
  function Obstacle(){
    if (frameCount % 300 ===0){
     var obstacle = createSprite(500,365,23,32);
      obstacle.velocityX = -(5+2 * score / 100);
      obstacle.addImage("obstacle", obstacleImage);
      obstacle.scale = 0.2;
      obstacleGroup.add(obstacle);
      obstaclesGroup.setLifeTimeEach(100);
      obstacle.setCollider("circle",0,0,200);
    }
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

  
  
  
  


}






