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

    var synth = window.speechSynthesis;
    speak_data1 = "The First Prediction Is" + prediction1;
    var utterthis = new speechSynthesisUtterance(speak_data1);
    synth.speak(utterthis);
}

function check(){

    img = document.getElementById("image");
    classifier.classify(img , gotResults);
}

function gotResults(error , results){

    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("result_symbol_name").innerHTML = results[0].label;
        prediction1 = results[0].label;
        speak();

        if(results[0].label == "Victory"){

            document.getElementById("update_gesture").innerHTML = "&#128522";
        }

        if(results[0].label == "Best"){

            document.getElementById("update_gesture").innerHTML = "&#128532";
        }

        if(results[0].label == "Amazing"){

            document.getElementById("update_gesture").innerHTML = "&#128559";
        }

    }
}