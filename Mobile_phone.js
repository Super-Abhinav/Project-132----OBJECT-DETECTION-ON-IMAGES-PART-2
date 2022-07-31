Status = "";
phone_image = "";

function preload() {
    phone_image = loadImage("phone.jpeg");
}

function setup() {
    canvas = createCanvas(640,350);
    canvas.center();
    canvas.position(470,255);
    object_detector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded() {
    console.log("Model is Loaded!");
    Status = true;
    object_detector.detect(phone_image, gotResult);
}

function gotResult(error,results) {
    if(error) {
        console.log(error);
    }
    console.log(results);
}

function draw() {
    image(phone_image,0,0,640,350);
}