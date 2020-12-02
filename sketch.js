
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup,obstacle;
var score=0;
var background,backgroundImage;

function preload(){
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
backgroundImage = loadImage('jungle.jpg');
 
 
}



function setup() {
  createCanvas(900,900);
  background = createSprite(100,500,10,10);
  background.addImage(backgroundImage);
  monkey = createSprite(100,720,10,10);
  monkey.addAnimation('monkey',monkey_running);
  monkey.scale=0.2;
  ground = createSprite(800,850,10000,10);
  bananaGroup = new Group();
  obstacleGroup = new Group();
  

  
}


function draw() {


  
  
if(keyDown('space')&&monkey.y >=150){
  monkey.velocityY=-5;
}
  monkey.velocityY = monkey.velocityY+0.8;
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  monkey.collide(ground);
  if(obstacleGroup.isTouching(monkey)){
    ground.velocityX=0;
    obstacleGroup.setVelocityXEach(0);
    
  }
 ground.velocityX=-2;
  ground.visible=false;
food();
obstacles();
  
  background.velocityX=-2;
  if(background.x<0){
    background.x=background.width/2;
  }
   
  
 
  if(obstacleGroup.isTouching(monkey)){
    monkey.scale=0.2;
    obstacleGroup.destroyEach();
  }
  
  if(bananaGroup.isTouching(monkey)){
    monkey.scale=0.3;
    bananaGroup.destroyEach();
    score=score+2;
  }
  drawSprites();
   fill('white')
  textSize=24
  text("Score: "+score,300,400)
   
  switch(score){
    case 30: monkey.scale=0.4;
      break;
      case 40:monkey.scale=0.5;
      break;
    case 60:monkey.scale=0.6
      break;
      default:break;
  }
  
  
  
  
}
  function food(){
    if(frameCount % 80 === 0){
      banana = createSprite(300,300,10,10);
      banana.y = Math.round(random(300,500));
      banana.addAnimation('banana',bananaImage);
      banana.scale=0.1;
      banana.velocityX=-2;
      banana.lifetime=300;
      bananaGroup.add(banana);
    }
  }
  
function obstacles(){
  if(frameCount % 300 ===0){
    var obstacle = createSprite(300,800,10,10);
    obstacle.velocityX=-3;
    obstacle.x = Math.round(random(300,450));
    obstacle.addImage(obstacleImage);
    obstacle.lifetime=300;
    obstacleGroup.add(obstacle);
    obstacle.scale=0.2;
  }
}
 






