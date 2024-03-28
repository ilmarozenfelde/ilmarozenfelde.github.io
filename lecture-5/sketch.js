let img;

// Load the image and create a p5.Image object.
function preload() {
  img = loadImage('./monkey.jpg');
}

function setup(){
        createCanvas (windowWidth, 
        windowHeight)
        image(img, 0, 0, width, height);
}

function draw() {
    
    fill('red');

    if(mouseX > 400){

        if(mouseX < 400 + 100){
               
                if(mouseY > 350){

                    if(mouseY < 350 + 100){
                        fill('blue');
                        circle (random(width), random(height), 25);

                    }
                }
        }
        } else{
            image(img, 0, 0, width, height);
        }
    
    rect(400,350,100);

    // if (mouseX < width / 2 && mouseY < height / 2) {
    //     circle(mouseX, mouseY, 50);
    // }

    // if (mouseX > width / 2 && mouseY > height / 2) {
    //     square(mouseX, mouseY, 50);
    // }
    
}