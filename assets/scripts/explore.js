// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const voiceSelect = document.getElementById('voice-select');
  const textarea = document.getElementById('text-to-speak');
  const button = document.querySelector('button');
  const face = document.querySelector('#explore img');

  function loadVoices() {
    const voices = speechSynthesis.getVoices();
    voices.forEach((voice) => {
      const option = document.createElement('option');
      option.value = voice.name;
      option.textContent = `${voice.name} (${voice.lang})`;
      voiceSelect.appendChild(option);
    });
  }

  speechSynthesis.addEventListener('voiceschanged', loadVoices);
  loadVoices();

  button.addEventListener('click', () => {
    const text = textarea.value;
    const utterance = new SpeechSynthesisUtterance(text);

    const voices = speechSynthesis.getVoices();
    const selectedVoice = voices.find((v) => v.name === voiceSelect.value);
    if (selectedVoice) utterance.voice = selectedVoice;

    utterance.onstart = () => {
      face.src = 'assets/images/smiling-open.png';
      face.alt = 'Smiling face open mouth';
    };
    utterance.onend = () => {
      face.src = 'assets/images/smiling.png';
      face.alt = 'Smiling face';
    };

    speechSynthesis.speak(utterance);
  });
}