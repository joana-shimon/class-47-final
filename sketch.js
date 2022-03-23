var ironMan,thanos,blackhole,battery,bullet,tesseract,spaceStone,coins
var bg
var i=1
var k=1,m=1
var bulletCount=20

function preload(){
    ironManImg=loadImage("IMAGES/iron man flying.png")
    thanosImg=loadImage("IMAGES/thanos.png")
    batteryImg=loadImage("IMAGES/battery.png")
    blackholeImg=loadImage("IMAGES/BLACKHOLE.png")
    bulletImg=loadImage("IMAGES/bullet.png")
    tesseractImg=loadImage("IMAGES/tesseract.png")
    spaceStoneImg=loadImage("IMAGES/SPACE STONE.png")
    coinsImg=loadImage("IMAGES/coin image.png")
    bgImg=loadImage("IMAGES/bg.jpg")
}


function setup(){
   //createCanvas(15000,windowHeight)
createCanvas(windowWidth,windowHeight)
 ironMan= createSprite(200,100,50,50)
ironMan.addImage(ironManImg)
ironMan.scale=0.2





blackholePos=[[600,200],[width-100,50],[(width*2)-200,500],[(width*4),250],[(width*7),300]]





tesseract=createSprite(830,200,50,50)
tesseract.addImage(tesseractImg)
tesseract.scale=0.2

spaceStone=createSprite(850,200,50,50)
spaceStone.addImage(spaceStoneImg)
spaceStone.scale=0.2



for(j=0;j<blackholePos.length;j++){
     
    blackhole=createSprite(blackholePos[j][0],blackholePos[j][1],50,50)
    blackhole.addImage(blackholeImg)
    blackhole.scale=0.5


 }


}


function draw(){

    background("white")
    camera.position.x=ironMan.x
  imageMode(CENTER)
  image(bgImg,width/2,height/2,width*25,height)

    if( keyDown(RIGHT_ARROW)){
        ironMan.x=ironMan.x+10
    }

    if (keyDown(DOWN_ARROW)&& ironMan.y<height-300){
        ironMan.y=ironMan.y+10
    }

    if(keyDown(UP_ARROW)&& ironMan.y>40){
        ironMan.y=ironMan.y-10
    }
    console.log(height)

    

    
    
spawningThanos();
spawnCoins();
spawnBattery();
    drawSprites()
    textSize(20)
    fill("white")
    text("NO. OF BULLETS: "+bulletCount,camera.position.x-750,50)
    
    shoot();
}

function spawningThanos(){
    if(frameCount%200===0){
        thanosX=(width*2)*i
        thanosY=Math.round(random(100,height-300))
        thanos=createSprite(thanosX,thanosY,50,50)
        thanos.addImage(thanosImg)
        thanos.scale=0.2

        thanos.velocityX=-2
        thanos.lifetime=width/2
        i=i+1
    }
}

function spawnCoins(){
    if (frameCount%50===0){
        coinsX=(width/2)*k
        coinsY=Math.round(random(100,height-300))
        coins=createSprite(coinsX,coinsY,50,50)
        coins.addImage(coinsImg)
        coins.scale=0.05
       k=k+1 
    }
}

function spawnBattery(){
    if (frameCount%350===0){
        batteryX=(width*2+300)*m
        batteryY=Math.round(random(100,height-300))
        battery=createSprite(batteryX,batteryY,50,50)
        battery.addImage(batteryImg)
        battery.scale=0.15 
       m=m+1 
    }
}

function shoot(){
    if (keyWentDown("SPACE")&&bulletCount>0){

bullet=createSprite(ironMan.x,ironMan.y,50,50)
bullet.velocityX=50
bullet.lifetime=width/7
bullet.addImage(bulletImg)
bullet.scale=0.2
bulletCount=bulletCount-1

}
}


