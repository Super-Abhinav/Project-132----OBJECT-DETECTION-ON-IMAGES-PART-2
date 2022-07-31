Status = "";
fruit_basket = "";

function preload() {
    fruit_basket = loadImage("fruit_basket.jpeg");
}

function setup() {
    canvas = createCanvas(480,350);
    canvas.center();
    canvas.position(550,255);
    object_detector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded() {
    console.log("Model is Loaded!");
    Status = true;
    object_detector.detect(fruit_basket, gotResult);
}

function gotResult(error,results) {
    if(error) {
        console.log(error);
    }
    console.log(results);
}

function draw() {
    image(fruit_basket,0,0,480,350);
}