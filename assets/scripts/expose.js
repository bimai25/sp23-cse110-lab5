// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  let hornOptions = document.getElementById("horn-select");
  let volumeControl = document.getElementById("volume");
  let playAudioBtn = document.querySelector("button");
  const jsConfetti = new JSConfetti(); //create a confetti object
  let shootConfetti = false;

  hornOptions.addEventListener('change', function(){
    //check the value of the horn option element and set the image and
    //audio accordingly
    if(hornOptions.value == "air-horn"){
      console.log("air horn selected");
      let hornImg = document.querySelector("[alt='No image selected']");
      let hornAudio = document.getElementsByClassName("hidden");
      hornAudio[0].src = "assets/audio/air-horn.mp3";
      hornImg.src = "assets/images/air-horn.svg";
      shootConfetti = false;
    }
    if(hornOptions.value == "car-horn"){
      console.log("car horn selected");
      let hornImg = document.querySelector("[alt='No image selected']");
      let hornAudio = document.getElementsByClassName("hidden");
      hornAudio[0].src = "assets/audio/car-horn.mp3";
      hornImg.src = "assets/images/car-horn.svg";
      shootConfetti = false;
    }
    if(hornOptions.value == "party-horn"){
      console.log("party horn selected");
      let hornImg = document.querySelector("[alt='No image selected']");
      let hornAudio = document.getElementsByClassName("hidden");
      hornAudio[0].src = "assets/audio/party-horn.mp3";
      hornImg.src = "assets/images/party-horn.svg";
      shootConfetti = true;
    }
  })

  volumeControl.addEventListener('change', function(){
    //check the volume level and set the picture accordingly
    console.log(volumeControl.value);

    //set the volume of the audio element
    document.getElementsByClassName("hidden").volume = volumeControl.value * 0.01;
    if(volumeControl.value == 0){
      console.log("volume control 0");
      let img = document.querySelector("[alt='Volume level 2']");
      img.src = "assets/icons/volume-level-0.svg";
    }
    if(volumeControl.value >= 1 && volumeControl.value < 33){
      console.log("volume control 1");
      let img = document.querySelector("[alt='Volume level 2']");
      img.src = "assets/icons/volume-level-1.svg";
    }
    if(volumeControl.value >= 33 && volumeControl.value < 67){
      console.log("volume control 2");
      let img = document.querySelector("[alt='Volume level 2']");
      img.src = "assets/icons/volume-level-2.svg";
    }
    if(volumeControl.value >= 67){
      console.log("volume control 3");
      let img = document.querySelector("[alt='Volume level 2']");
      img.src = "assets/icons/volume-level-3.svg";
    }
  })

  playAudioBtn.addEventListener('click', function(){
    document.querySelector("audio").play();

    if(shootConfetti == true){
      jsConfetti.addConfetti();
    }
  })
}