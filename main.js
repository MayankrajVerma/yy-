song_1 = "";
song_2 = "";
leftWristx = 0;
leftWristy = 0;
rightWristx = 0;
rightWristy = 0;
function preload() {
    song_1 = loadSound("music.mp3");
    song_2 = loadSound("music2.mp3");
}

function setup() {
    canvas = createCanvas(510, 410);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotposes);
}
function modelLoaded() {
console.log('poeNet Is Initialized');
poseNet.on('pose',gotposes);
}
function draw() {
    image(video, 0, 0, 510, 410);

}

function play() {
    song.play();
    song.setVolume(1);
    song.rate(1)
}
function gotposes(results){

    if(results.length > 0)
    {
console.log(results);
    }
leftWristX = results[0].pose.leftWrist.x;
leftWristy = results[0].pose.leftWrist.y;
console.log("leftWristX = " +leftWristX +" leftWristY = "+leftWristy);

rightWristX = results[0].pose.rightWrist.x;
rightWristy = results[0].pose.rightWrist.y;
console.log("rightWristX = " +rightWristX +" rightWristY = "+rightWristy);
}