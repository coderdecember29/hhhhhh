

function preload(){

}

function setup(){
video = createCapture(VIDEO);
video.size(500, 500);
canvas = createCanvas(500, 500);
canvas.position(560,150);
posenet = ml5.poseNet(video, modelLoaded);
posenet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log('Posenet Is initialized')
}
function draw(){
background('#969A97');
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
    }
}