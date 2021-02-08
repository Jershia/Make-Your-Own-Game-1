var canvas, backgroundImage;
var gameState = 0;
var distance = 0;
var database;
var block1,block2,block3,block4;
var block5,block6,block7,block8,block9,block10,block11,block12;
var block13,block14,block15,block16,block17;
var block18,block19,block20,block21,block21,block22,block23,block24;

function setup(){
  canvas = createCanvas(displayWidth - 50, displayHeight-25);
}


function draw(){
  background("#373A3C");

  block1 = createSprite(displayWidth - 50,displayHeight - 40,10000,25);
  block1.shapeColor = "#0C81CD";
  block2 = createSprite(10,10,10000,25);
  block2.shapeColor = "#0C81CD";
  block3 = createSprite(10,10,25,10000);
  block3.shapeColor = "#0C81CD";
  block4 = createSprite(1220,10,25,10000);
  block4.shapeColor = "#0C81CD";
  block5 = createSprite(10,200,250,25);
  block5.shapeColor = "#0C81CD";
  block6 = createSprite(10,450,250,25);
  block6.shapeColor = "#0C81CD";
  block7 = createSprite(400,10,25,250);
  block7.shapeColor = "#0C81CD";
  block8 = createSprite(800,10,25,250);
  block8.shapeColor = "#0C81CD";
  block9 = createSprite(1220,200,250,25);
  block9.shapeColor = "#0C81CD";
  block10 = createSprite(1220,450,250,25);
  block10.shapeColor = "#0C81CD";
  block11 = createSprite(400,650,25,200);
  block11.shapeColor = "#0C81CD";
  block12 = createSprite(800,650,25,200);
  block12.shapeColor = "#0C81CD";
  block13 = createSprite(480,310,25,150);
  block13.shapeColor = "#0C81CD";
  block14 = createSprite(650,220,150,25);
  block14.shapeColor = "#0C81CD";
  block15 = createSprite(810,310,25,150);
  block15.shapeColor = "#0C81CD";
  block16 = createSprite(650,220,150,25);
  block16.shapeColor = "#0C81CD";
  block17 = createSprite(650,420,150,25);
  block17.shapeColor = "#0C81CD";
  block18 = createSprite(250,360,120,25);
  block18.shapeColor = "#0C81CD";
  block19 = createSprite(320,313,25,120);
  block19.shapeColor = "#0C81CD";
  block20 = createSprite(1000,360,120,25);
  block20.shapeColor = "#0C81CD";
  block21 = createSprite(940,312,25,120);
  block21.shapeColor = "#0C81CD";
  
  text(mouseX + "," + mouseY,mouseX,mouseY);
  drawSprites();
}
