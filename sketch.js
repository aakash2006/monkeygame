
var monkey , monkey_running
var bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var ground,invisibleGround
var survivalTime=0;

function preload()
{
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}
function setup() 
{
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("monkey",monkey_running);
  monkey.scale=0.08
  
  ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  
  bananaGroup= new Group();
  obstacleGroup = new Group();
}


function draw()
{ 
  background('white');  
  stroke("black")
  textSize(20)
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  
  
  monkey.collide(ground);
   
  if(keyDown("space") && monkey.y >=315)
  {
   monkey.velocityY=-14;
  }
   monkey.velocityY=monkey.velocityY+0.5 ;
  
  if(ground.x<0)
  {
    ground.x=ground.width/2;
  }
  if(obstacleGroup.isTouching(monkey))
    {
      monkey.collide(obstacleGroup)
    }

   food();
   obstacles();
  
   drawSprites();
  text("survivalTime: "+survivalTime,100,50)
}

function food()
{
  if(frameCount % 80 === 0)
  {
   var banana = createSprite(400,120,20,20)  
   banana.addImage(bananaImage)
   banana.y=random(120,200); 
   banana.scale= 0.07;
   banana.velocityX=-5; 
   banana.lifetime = 90; 
   bananaGroup.add(banana);
  }
}

function obstacles()
{
  if(frameCount % 300 === 0)
    {
      var obstacle = createSprite(400,310,30,30)
      obstacle.addImage(obstacleImage);
      obstacle.scale=0.2;
      obstacle.velocityX=-5;
      obstacle.lifetime = 90;
      obstacleGroup.add(obstacle)
    }
}


