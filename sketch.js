var img, x,y;
function preload () {
  img = loadImage('tree.jpg');
}


function setup() {
  createCanvas (400, 400);
}


function draw() {
  background (220);
  x = mouseX;
  y = mouseY;
  image(img,0,0,img.width/3, img.height/3);
  var c = get(x,y);
  fill(c);
  ellipse(x,y,100,100);
  }