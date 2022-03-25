prediction1 = "";

Webcam.set({
    width : 350,
    height : 300,
    image_format : "png",
    png_quality : 90
});

camera = document.getElementById("camera");

Webcam.attach(camera);

function take_snapshot(){

    Webcam.snap(function(data_uri){

        document.getElementById("result").innerHTML = "<img id='image' src='" + data_uri + "'>";
    });
}

console.log("ml5 version :" , ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/AquGGZDrj/model.json' , modelLoaded);

function modelLoaded(){

    console.log("Model Is Loaded");
}

function speak(){

    var synth = window.SpeechSynthesis;
    speak_data1 = "The First Prediction Is" + prediction1;
    var utterthis = new SpeechSynthesisUtterance(speak_data1);
    synth.speak(utterthis);
}