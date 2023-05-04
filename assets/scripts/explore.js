// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const speech = window.speechSynthesis; //create the text to speech object
  let voices; //this is an array of Voices
  let voiceSelect = document.getElementById("voice-select"); //dropdown menu of voices
  let talkBtn = document.querySelector("button"); //btn to activate speech

  window.addEventListener('load', function(){
    //load all the voices
    voices = speech.getVoices();

    //populate voices in drop down list
    populateVoiceList();

    console.log("voices loaded and ready in drop down");
  })

  talkBtn.addEventListener('click', function(){
    console.log("talk btn pressed");
    //get text from textbox
    let msg = document.getElementById("text-to-speak").value;

    //create a new object to speak the text
    const toSpeak = new SpeechSynthesisUtterance(msg);

    //get the voice from the dropdown
    const voiceOption = voiceSelect.selectedOptions[0].getAttribute("data-name");

    //set the voice to the selected option
    for(let i = 0; i < voices.length; i++){
      if(voices[i].name === voiceOption){
        toSpeak.voice = voices[i];
      }
    }
    //speak
    speech.speak(toSpeak);
    document.querySelector("img").src = "assets/images/smiling-open.png";
    console.log("we are speaking");

    //event listener for when utterance is done speaking
    toSpeak.addEventListener('end', function(){
      console.log("we are done speaking");
      document.querySelector("img").src = "assets/images/smiling.png";
    })
  })

  function populateVoiceList() {
    voices = speech.getVoices();

    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;

      if (voices[i].default) {
        option.textContent += " — DEFAULT";
      }

      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      voiceSelect.appendChild(option);
    }
  }

}