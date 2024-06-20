let c, c1, c2;
function setup(){
  n=0;
   createCanvas(windowWidth, windowHeight);
 background(0);
}

// the parameter at which x and y depends is usually taken as either t or symbol of theta
let t = 0;
function draw(){
  c = random(0,255);
  translate(width/2,height/2);
  stroke(c, 0, 255);
  strokeWeight(1.5);
  //loop for adding 100 lines
  for(let i = 0;i<100;i++){
    line(x1(t+i),y1(t+i),x2(t+i)+20,y2(t+i)+20);
  }
  t+=0.2;
  
  n++;
}
// function to change initial x co-ordinate of the line
function x1(t){
  return sin(t/10)*125+sin(t/20)*125+sin(t/30)*125;
}

// function to change initial y co-ordinate of the line
function y1(t){
  return cos(t/10)*125+cos(t/20)*125+cos(t/30)*125;
}

// function to change final x co-ordinate of the line
function x2(t){
  return sin(t/15)*125+sin(t/25)*125+sin(t/35)*125;
}

// function to change final y co-ordinate of the line
function y2(t){
  return cos(t/15)*125+cos(t/25)*125+cos(t/35)*125;
}