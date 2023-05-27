Webcam.set({
    width: 350,
    height: 350,
    image_format:"png",
    png_quality: 90
}) 
camera = document.getElementById("camera")
Webcam.attach("#camera")

function capture(){
    Webcam.snap(function(data){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data+'"/>'
    })
}
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/28rSETy8k/model.json",modelloaded)

function modelloaded(){
    console.log("model loaded")
}

function check(){
    ing = document.getElementById("captured_image")
    classifier.classify(ing,gotresult) 
}

function gotresult(error,result){
    if(error){
        console.error(error)
    }
    else{
        console.log (result)
        document.getElementById("result_name").innerHTML = result[0].label
        if(result[0].label == "Thumbs up") { document.getElementById("result_emoji").innerHTML = "&#128077;"; }
        if(result[0].label == "Peace") { document.getElementById("result_emoji").innerHTML = "&#9996;"; }
        if(result[0].label == "Horns") { document.getElementById("result_emoji").innerHTML = "&#129311;"; }
    }
}