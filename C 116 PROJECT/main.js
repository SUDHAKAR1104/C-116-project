nosex=10;
nosey=10;
function preload(){
    clown_nose = loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
G
}

function setup(){
canvas=createCanvas(300,300);
canvas.center()
video=createCapture(VIDEO);
video.size(300,300);
video.hide()

poseNet=ml5.poseNet(video,modelloaded)

poseNet.on('pose',gotposes)
}

function draw(){
image(video,0,0,300,300);
image(clown_nose,nosex,nosey,30,30);
}

function take_snapshot(){
    save('My_image.png')
}

function modelloaded(){
    console.log("Posenet is initialized !")
}

function gotposes(results){
    if (results.length > 0){
        console.log(results);
        nosex=results[0].pose.nose.x -15;
        nosey=results[0].pose.nose.y -15;
    }
}

