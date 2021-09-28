
let ftrans;
let music;
let visual;

function preload() {
    soundFormats('mp3', 'ogg');
    music = loadSound('media/audio.mp3');
}

function setup(){
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);
  music.play();
   fft = new p5.FFT();
  
  
}


function draw(){
  background(30);
  rotateX(20);

  
  let waveform = fft.waveform();
  

  noFill();
  stroke(100, 100, 240);
  

  for(var i = 0 ; i <  waveform.length ;i++){

    var r = map(sin(waveform.length /2), -1, 5, 600, 200);
    var g = map(i, 0, waveform.length, 50, width);
    var b = map(cos (waveform[i]/2), -1, 1, 100, 100);

    stroke(r, g, b);
    rotate(frameCount /40);

    
    beginShape()
    for(var j = 0; j < 360; j += 90){
      var rad = i * 10
      var x = rad * cos(j);
      var y = rad * sin(j);
      var z = sin(frameCount*2 + i *10) * 50;
      

      vertex(x, y, z);  
    }
    endShape(CLOSE)
   
  }
}
