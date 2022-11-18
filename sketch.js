var trex
var trex_running
var ground
var groundimage

function preload() {
  trex_running = loadAnimation("trex3.png","trex4.png","trex1.png")
  groundimage = loadImage("ground2.png")

}

function setup() {
  createCanvas(600,200)
  

  trex = createSprite(50,160,20,50)
  trex.addAnimation("running",trex_running)

  ground = createSprite(300,180,600,20)
  ground.x = ground.width/2
  ground.addImage(groundimage)
}

function draw() {

  background("white")
  if(ground.x < 0) {
    ground.x = ground.width/2
  }


  if(keyDown("space")) {
    trex.velocityY = -5
  }
  trex.velocityY = trex.velocityY + 0.5
  trex.collide(ground)
  ground.velocityX = -3

  drawSprites()
}