var movingRect,fixedRect;
var obj1,obj2
function setup() {
  createCanvas(800,400);

  fixedRect=createSprite(200, 200, 50, 50);
fixedRect.shapeColor="yellow"

movingRect=createSprite(400, 200, 50, 50);
movingRect.shapeColor="blue"

obj1=createSprite(200, 100, 50, 50);
obj1.shapeColor="yellow"
obj1.velocityX=2
obj2=createSprite(700, 100, 50, 50);
obj2.shapeColor="yellow"
obj2.velocityX=-2

obj3=createSprite(400, 100, 50, 50);
obj3.shapeColor="purple"
obj3.velocityY=2
obj4=createSprite(400, 300, 50, 50);
obj4.shapeColor="purple"
obj4.velocityY=-2
}

function draw() {
  background(0,0,0); 
  movingRect.x=World.mouseX
  movingRect.y=World.mouseY
  if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2&&
    fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2&&
    movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2&&
    fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2){
    movingRect.shapeColor="red"
  }
  else{
movingRect.shapeColor="blue"
  }
  if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2&&
    fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2){
      obj1.velocityX=obj1.velocityX*(-1)
      obj2.velocityX=obj2.velocityX*(-1)

    }
    if(movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2&&
    fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2){
      obj3.velocityX=obj3.velocityY*(-1)
      obj4.velocityX=obj4.velocityY*(-1)
    }


  drawSprites();
}