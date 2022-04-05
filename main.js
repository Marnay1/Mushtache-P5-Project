noseX= 0;
noseY= 0;
function preload(){
    mustache= loadImage("https://i.postimg.cc/9z37Gf9c/mustache-student-math-favorite-for-friday-the-the-1.png")
}
function setup(){
    canvas= createCanvas(400,400);
    canvas.center();
    video= createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
    //https://i.postimg.cc/pLhfhgnW/a9fbd164a8b5aca97d51cc2285385d1e.png//
}
function draw(){
    image(video, 0, 0, 400, 400);
    image(mustache, noseX + 8, noseY + 80, 80, 60)
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX= results[0].pose.nose.x;
        noseY= results[0].pose.nose.y;
        console.log("nose x= " + noseX);
        console.log("nose y= " + noseY);
    }
}
function take_snapshot(){
    save('mustache_Filter_Image.png');
}
function modelLoaded(){
    console.log("PoseNet Is Initialized");
}