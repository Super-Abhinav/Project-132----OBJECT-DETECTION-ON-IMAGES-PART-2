Status = "";
bottle_image = "";

function preload() {
    bottle_image = loadImage("bottle.jpeg");
}

function setup() {
    canvas = createCanvas(300,400);
    canvas.center();
    canvas.position(600,255);
    object_detector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded() {
    console.log("Model is Loaded!");
    Status = true;
    object_detector.detect(bottle_image, gotResult);
}

function gotResult(error,results) {
    if(error) {
        console.log(error);
    }
    console.log(results);
}

function draw() {
    image(bottle_image,0,0,300,400);
}