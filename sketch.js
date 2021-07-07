var Jaxon,Jaxon_runnig,edges;
var pathImage,invisible_barrier1,invisble_barrier2 ;

function preload(){
  //pre-load images
  Jaxon_runnig = loadAnimation ("Runner-1.png", "Runner-2.png")
  pathImage = loadImage ("path.png")
}

function setup(){
  createCanvas(1200,800);
  //create sprites here

 path = createSprite(600,400,10,50);
 path.addImage("path", pathImage);
 path.y = path.height/2 ;
 path.scale = 2;

 Jaxon=createSprite (600,750,50,50);
 Jaxon.addAnimation("running", Jaxon_runnig);

  Jaxon.scale = 0.1;
  Jaxon.x = 600 ;
 

}

function draw() {
  background(0);
  path.velocityY = 10 ;
  

  if(path.y >500){
    path.y = 0 ;
  }
  drawSprites();
}
