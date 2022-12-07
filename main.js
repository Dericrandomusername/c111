Webcam.set({
    width:350,
    height:300,
    image_format:"PNG",
  png_quality:90  
});
camera=document.getElementById("camera");
Webcam.attach("#camera");

function take_snapshot(){
    Webcam.snap(function (data_uri){
        document.getElementById("result").innerHTML="<img id='captured_image' src='"+data_uri+"' >";

    })
}
console.log("ml5 version", ml5.version);
image_classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/dSBK5HVm3/model.json",modelLoaded);
function modelLoaded(){
    console.log("model has been loaded")
}
function check(){
    var img=document.getElementById("captured_image");
    image_classifier.classify(img,got_result);


}
function got_result(error, results){
    if(error){
        console.error(error);

    }
    else{
        console.log(results);
        document.getElementById("result_object_name").innerHTML=results[0].label;
        document.getElementById("result_object_accuracy").innerHTML=results[0].confidence.toFixed(2);
    }
}
