function removeTransition(e) {
  // Skips it's not has not got a property name of transform.
  if (e.propertyName !== "transform") return;
  // Removes playing class from element
  e.target.classList.remove("playing");
}

// Function which plays the corresponding sound once pressed
function playSound(e) {
  // Grabbing an audio element assuming it's there. If there's no audio
  // data key, it won't be selected
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  // Grabbing the corresponding key from above so we can add class below
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  // If there's no audio, stop running
  if (!audio) return;

  // Adding class of playing to the element
  key.classList.add("playing");
  // Rewinds to the start, allows for multiple clicks in quick succession
  audio.currentTime = 0;
  // Plays audio source attached to audio element
  audio.play();
}

// Grabs all the keys
const keys = Array.from(document.querySelectorAll(".key"));
// Looping through the node list and adding an event listener to all of them
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
// Event listener for entire window frame, waiting for keydown, which will play sound
window.addEventListener("keydown", playSound);
