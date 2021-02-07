var bananaImage,obstacleImage,obstaclegroup,background,score,foodGroup;

function preload(){
  backImage=loadImage("jungle.jpg")
  player_running=("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png")
  
  bananaImage=loadImage("Banana.png");
  obstacle_img=loadImage("stone.png");
}

function setup(){
  
  createCanvas(600, 400);
  
  ground = createSprite(200,180,400,20);
  ground.addImage("jungle.jpg");
  ground.x = ground.width /2;
  ground.velocityX = -2;
  ground.visible = false;
  
  player.addAnimation("Monkey_01.jpg");
  
  ObstaclesGroup=new Group();
    foodGroup=new Group();
}

function draw() {
  background(0);
  
 if(ObstaclesGroup.istouching(player)) {
   player.scale=0.2;
  }
  
  stroke("white");
  textSize(20);
  fill("white");
  text("score: "+score,500,500);
  
  switch(score){
    case 10:player.scale=0.12;
      break;
  
  case 20:player.scale=0.14;
      break;
  
  case 30:player.scale=0.16;
      break;
  
  case 40:player.scale=0.18;
      break;
  
      default: break;
  
}
  
  
drawSprites();  
}