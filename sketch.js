var shell, wall;
var speed, weight, thickness;
var damage;
var bulletRightEdge, wallLeftEdge;

function setup() {
  // canvas
  createCanvas(1600,400);
  
  //random speed and weight of shell and thickness of wall
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);

  //sprites for shell and wall
  shell = createSprite(50, 200, 50, 10);
  wall = createSprite(1500, 200, thickness, height/2);
  wall.shapeColor = color(80,80,80);
  
  //damage formula
  damage = Math.round((0.5 * weight * speed * speed)/(thickness * thickness * thickness));
}

function draw() {
  background("black");
  
  // shell speed is eual to speed
  shell.velocityX = speed;
  shell.shapeColor = "white";

  console.log(damage);
  
  // checks of bullet has collided with the wall and calculates damage to wall and changes its color accordingly
  if (collide(shell, wall)) {
    shell.velocityX = 0;

    if (damage <= 10) {
      wall.shapeColor = "lime";
    }
    else if (damage > 10) {
      wall.shapeColor = "red";
    }
  }

  drawSprites();
}

// takes arguments from user
function collide(bullet, block) {
  bulletRightEdge = bullet.x + bullet.width;
  wallLeftEdge = block.x;
  if (bulletRightEdge >= wallLeftEdge) {
    return true;
  }
  else {
    return false;
  }

} 