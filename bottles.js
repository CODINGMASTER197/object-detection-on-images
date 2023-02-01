status = "";
objects = [];

function preload(){
    img = loadImage("bottles.jpg");
}

function setup(){
    canvas = createCanvas(380,380);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded(){
    console.log("Model Loaded!");
    status = true;
}

function gotresults(){
    if(error){
        console.error(error);
    }
    console.log(results);
    objects = results;
}

function draw(){
    image(img, 0, 0, 380, 380);
}