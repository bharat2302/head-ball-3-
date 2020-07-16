var crowd,crowdImage;
var back,backImage;
var goal,goalImage,goal2,goal2Image;
var p1,p1Iamge,p2,p2Image;
var ball,ballImage;
var buttons,button,buttonsImage,buttonImage;
var girl,girlImage
var invisiblegrnd;
var gameState="serve";
var ps;
var cs;
var reset,resetImage;
var a,aImage;
var score,scoreImage;
var playerSound,goalSound;
var dt=3000;


function preload()
{
  playerSound=loadSound("player.mp3");
  goalSound=loadSound("goal sound.mp3");
  crowdImage=loadImage("ok maam.jpg");
  resetImage=loadImage("restart.png");
  ballImage=loadImage("ball.png");
  goalImage=loadImage("opgoal.png"); 
  goal2Image=loadImage("mygoal.png");
  p2Image=loadAnimation("1stplayer.png");
  p1Image=loadAnimation("comp.png");
  buttonsImage=loadImage("rightb.png");
  buttonImage=loadImage("buttonsl.png"); 
  backImage=loadImage("finally.jpg"); 
  girlImage=loadAnimation("girl.png");
  aImage=loadImage("god.png");
  scoreImage=loadImage("bharatjainbh.png");
 
  
}
function setup() {
  createCanvas(displayWidth,displayHeight); 

 
  
  back=createSprite(410,200)
  back.addAnimation("b",backImage);
  back.scale=1;
  
  goal=createSprite(80,250)
  goal.addAnimation("bh",goalImage);
  goal.scale=0.9;
  
  goal2=createSprite(720,235)
  goal2.addAnimation("bh",goal2Image);
  goal2.scale=0.9;
  
  p1=createSprite(100,447)  
  p1.addAnimation("bruh",p1Image);
  p1.scale=1;
 // p1.debug=true;
  
  p2=createSprite(675,447,15,100)
  p2.addAnimation("bro",p2Image);
  p2.addAnimation("bro1",girlImage);
  p2.scale=1;
  //p2.debug=true;
   
  score=createSprite(380,50)
  score.addImage("gcwbhj",scoreImage);
  score.scale=1.3;
  
  ball=createSprite(375,0,10,10)
  ball.addAnimation("sorry",ballImage);
  ball.scale=0.2;
 
  
  
  invisiblegrnd=createSprite(390,450,1000,40);
  invisiblegrnd.visible=false;
  
  p1.setCollider("circle",0,0,30);
  p2.setCollider("circle",0,0,30);
  
  goal2.setCollider("rectangle",100,78,goal2.width-90,goal2.height-300);
  goal.setCollider("rectangle",-80,40, goal.width-170,goal.height-450);
  
  ps=0;
  cs=0;
  
  reset=createSprite(400,350)
  reset.addImage("shbdcn",resetImage);
  reset.scale=1;
  reset.setCollider("rectangle",0,0,300,100);
  reset.visible=false;
  //reset.debug=true;
  
  goal.debug=true;
  goal2.debug=true;
  a=createSprite(380,280)
  a.addImage("baeyvih",aImage);
  a.scale=0.2;
  
  
 
}

function draw() {
  background("220");
  edges=createEdgeSprites(); 
  
 
  if( mousePressedOver(a) && gameState==="serve")
  {
    ball.x=200;
    ball.y=200;
    p1.visible=true;
    p2.visible=true;
    ball.velocityY=21;
    ball.velocityX=19;
    gameState="play";
    a.visible=false;
  }
  
  if(gameState==="play")
  {  
    if(keyDown("space"))
  {
    p2.velocityY=-15;
  } 

 else if(keyWentUp("space"))
  {
    p2.velocityY=12;
  } 
    
  if(ball.isTouching(p2))
  { 
   p2.changeAnimation("bro1",girlImage);
  }
  
  if(ball.x<400)
  {
   p2.changeAnimation("bro",p2Image);
  }
   
  if(keyDown("left"))
  {
    p2.x=p2.x-10;
  }
  
  if(keyDown("right"))
  {
    p2.x=p2.x+10;
  }
    
  if(ball.isTouching(goal))
  {
   goalSound.play();
   ps=ps+1;
   ball.velocityX=0;
   ball.velocityY=0;
   ball.x=400;
   ball.y=5;
   setTimeout(resetBall,dt);
  }
  
  if(ball.isTouching(goal2))
  {
    goalSound.play();
    cs=cs+1;
    ball.velocityX=0;
    ball.velocityY=0;
    ball.x=400;
    ball.y=5;
    setTimeout(resetBall,dt);
  }
    
    if(ball.isTouching(p2))
  {
    playerSound.play();

  }
     if(ball.isTouching(p1))
  {
    playerSound.play();
   
  }
    
    
 if(ball.x<200)
   p1.y=ball.y;
  else
  {
    p1.y=320;
  }
  

    
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[0]);
  ball.bounceOff(edges[1]);
  ball.bounceOff(edges[3]);
    
  ball.bounceOff(goal);
  ball.bounceOff(goal2);
    
  ball.bounceOff(invisiblegrnd);
    
  ball.bounceOff(p1); 
  ball.bounceOff(p2);
    
  p1.bounceOff(p2);   
  p2.bounceOff(p1); 
  p2.bounceOff(edges[1]);
    
  } 
  
   if(cs===5 || ps===5)
  {
   gameState="over";
   
  }
    
  if(gameState==="over")
  {
   reset.visible=true;
     
  }
    
  if(mousePressedOver(reset)||touches.length>0)
  {   
    re(); 
    touches=[];
    a.visible=true;
  }
 
  p2.collide(invisiblegrnd);
  p1.collide(invisiblegrnd);
  drawSprites();
  
  textSize(40);
  fill("red");
  
  text(cs,290,70);
  text(ps,440,70);
 
}

function re()
{
  reset.visible=false;
  cs=0;
  ps=0;
  gameState="serve";
  //p1.visible=false;
  //p2.visible=false;
  
 
}
function resetBall()
{
  ball.velocityX=Math.round(random(-10,10));
  ball.velocityY=Math.round(random(-10,10));
}
