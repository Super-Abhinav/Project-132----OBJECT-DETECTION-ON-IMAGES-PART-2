Status = "";
laptop_image = "";

function preload() {
    laptop_image = loadImage("laptop.jpeg");
}

function setup() {
    canvas = createCanvas(600,350);
    canvas.center();
    canvas.position(500,255);
    object_detector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded() {
    console.log("Model is Loaded!");
    Status = true;
    object_detector.detect(laptop_image, gotResult);
}

function gotResult(error,results) {
    if(error) {
        console.log(error);
    }
    console.log(results);
}

function draw() {
    image(laptop_image,0,0,600,350);
}