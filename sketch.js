var car,wall;

  var speed,weight;
  var car2,wall2;
  var speed2,weight2;
  var car3,wall3;
  var speed3,weight3;
  function setup() {
  createCanvas(1000,400);
  speed = random (55,90)
  weight = random (400,1500)
  car = createSprite (50,200,50,50)
  wall = createSprite (900,200,50,height/2)
  car.velocityX=speed;
  wall.shapeColor=color(80,80,80)
  
  car2 = createSprite (50,100,50,50)
 /* wall2 = createSprite (900,100,50,height/2)
  car2 .velocityX=speed2;
  
  speed3 = random (27,80)
  weight3 = random (600,1100)
  car3 = createSprite (50,300,50,50)
  wall3 = createSprite (900,300,50,height/2)
  car3.velocityX=speed3;
  car.shapeColor= color (0,255,0)
  car2.shapeColor=color (0,255,0)
  car3.shapeColor= color (0,255,0)*/
}
function draw() {
  background(0);
  if(wall.x-car.x<(car.width+wall.width)/2){
    
  var deformation
  deformation=0.5*weight*speed*speed/22509
 car.velocityX=0
 if(deformation>180){
   car.shapeColor=color(255,0,0)
}
if(deformation>100){
  car.shapeColor=color(230,230,0)
}
if(deformation<100){
  car.shapeColor=color(0,255,0)
}
//else{
  //car.shapeColor="green"
  // wall.shapeColor="black"
//}
// deformation=0.5*weight*speed*speed/22500
     drawSprites();
}
}