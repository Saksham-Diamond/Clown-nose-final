noseX = 0
noseY = 0
function preload(){
   img= loadImage('https://i.postimg.cc/qvpn8HK0/imageedit-2-4391764994.png')
   
}
function setup(){
canvas =createCanvas(500,500)
canvas.center()
video = createCapture(VIDEO);
video.hide()
poseNet = ml5.poseNet(video,modelLoaded)
poseNet.on('pose',gotPoses)
}
function modelLoaded(){
console.log('model is loaded')
}

function draw(){
image(video,0,0,500,500);
image(img,noseX,noseY,40,40)
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX =results[0].pose.nose.x
        noseY =results[0].pose.nose.y}
}
function Capture(){
    save('MyNoseFilter.png')
}