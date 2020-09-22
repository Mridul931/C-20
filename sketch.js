var fixedRec,movingRec;

function setup() {
  createCanvas(1200,800);
 fixedRec = createSprite (600,400,20,80);
 movingRec = createSprite(200,50,80,20);
 fixedRec.shapeColor = "pink";
 movingRec.shapeColor = "pink";
 fixedRec.debug = true;
 movingRec.debug = true;
  
}

function draw() {
  background(0,0,0);  

  movingRec.x = World.mouseX;
  movingRec.y = World.mouseY;

  if (movingRec.x-fixedRec.x<movingRec.width/2+fixedRec.width/2
    && fixedRec.x-movingRec.x<fixedRec.width/2+movingRec.width/2
    && movingRec.y-fixedRec.y<movingRec.height/2+fixedRec.height/2
    && fixedRec.y-movingRec.y<fixedRec.height/2+movingRec.height/2){
    fixedRec.shapeColor = "orange";
    movingRec.shapeColor = "orange";
  }
  else {
    fixedRec.shapeColor = "pink";
    movingRec.shapeColor = "pink";
  }

  drawSprites();
}