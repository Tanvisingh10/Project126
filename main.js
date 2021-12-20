song1 = "";
song2 = "";

function preload(){
    song1 = loadSound("believer.mp3");
    song2 = loadSound("dance_monkey.mp3");
}
function setup(){
    canvas = createCanvas(470,450);
    canvas.position(430,115);
    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video, 0,0, 470,450);
}
