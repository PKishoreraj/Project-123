nosex=0;
nosey=0;
function preload(){
clown_nose=loadImage('https://i.postimg.cc/Y06kx6FF/clown-nose.png');
}
function setup(){
    canvas=createcanvas(300,300);
    canvas.center();
    video=createcapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modleloaded);
    poseNet.on('pose',gotPose);
}
function modleloaded(){
    console.log('PoseNet Is Initialized');
}
function draw(){
    image(video,0,0,300,300);
    image(clown_nose,nosex,nosey,30,30);
}
function take_snapshot(){
    save('myFilterImage.png');
}
function gotPose(results){
    if(results){
        console.log(results);
        nosex=result[0].pose.nose.x;
        nosey=result[0].pose.nose.y;
        console.log("nose x ="+results[0].pose.nose.x);
        console.log("nose y ="+results[0].pose.nose.y);
    }
}