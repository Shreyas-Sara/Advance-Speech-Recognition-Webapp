x = 0;
y = 0;
screen_w = 0;
screen_h = 0;
apple = "";
speak_data = "";
to_number = "";

draw_apple = "";

function preload() {
apple = loadImage("apple.png");
}
var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

 to_number = Number(content);

 if(Number.isInteger(to_number)){
   draw_apple = "set";
   document.getElementById("status").innerHTML = "Started Drawing Apple"; 
}
else{
  document.getElementById("status").innerHTML = "The speech has not been recognized " ; 

}

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 

}

function setup() {

screen_w = window.innerWidth;
screen_h = window.innerHeight;
canvas = createCanvas(screen_w - 150, screen_h - 150);
}

function draw() {
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";

    for(var i = 1; i <= to_number; i++){
      x = Math.floor(Math.random() * 700);
      y = Math.floor(Math.random() * 400);
      image(apple, x, y, 50, 50);
    }
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "to_number";
}
