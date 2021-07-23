video = "";
function preload() {
    video =  createCanvas('video.mp4');
    video.hide();
}
function setup() {
    canvas = createCanvas(580, 480);
    canvas.center();
}
function draw() {
    image(video, 0, 0, 580, 480);
}
function start() {
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status :  Detecting Objects";
}
function modelLoaded() {
    console.log("Model Loaded!")
    status =  true;
     video.loop();
     video.speed(1);
     video.volume(0);
}