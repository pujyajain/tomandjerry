var tom,tom1,tom2,tom3
var canvas
var jerry,jerry2,jerry3,gardenImg
function preload(){
 tom1 = loadImage("images/cat1.png");
 tom2=loadAnimation("images/cat2.png","images/cat3.png")
 tom3= loadImage("images/cat4.png")
 gardenImg = loadImage("images/garden.png")
 jerry1 = loadAnimation("images/mouse1.png")
 jerry2 = loadAnimation("images/mouse2.png","images/mouse3.png")
 jerry3= loadAnimation ("images/mouse4.png")
}


function setup() {
    canvas = createCanvas(1200,800);
    tom=createSprite(870,600)
    tom.addAnimation ("tom",tom1 );
    tom.scale=0.2;
    
    jerry = createSprite(200,600)
    jerry.addImage("jerry",jerry1)
    jerry.scale=0.15
  }
  
  function draw() {
    background(gardenImg);  
    if(tom.x - jerry.x <(tom.width - jerry.width)/2){
      tom.velocityX =0;
      tom.addAnimation("catLastImage",tom3)
      tom.x=300;
      tom.scale=0.2
      tom.changeAnimation("catLastImage")
      jerry.addAnimation("jerryLastImage",jerry3)
      jerry.scale=0.15
      jerry.changeAnimation("jerryLastImage")
    }
    drawSprites();
  }

  function keyPressed () {
    if(keyCode === LEFT_ARROW){
      tom.velocityX=-5;
      tom.addAnimation("catRunning",tom2)
      tom.changeAnimation("catRunning")
      jerry.addAnimation("jerryTease",jerry2)
      jerry.frameDelay=25;
      jerry.changeAnimation("jerryTease")
    }
    
  }


  
