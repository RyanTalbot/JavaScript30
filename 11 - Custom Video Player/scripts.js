/* Get Our Elements */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

/* Build our Functions */
function togglePlay(){
    // Paused is a property of video
    if(video.paused){
        video.play();
    } else {
        video.paused();
    }
}

function updateButton(){
    // "this." is bound to video
    const icon = this.paused ? "►" : "❚ ❚";
    toggle.textContent = icon;
}

/* Event Listeners */
video.addEventListener("click", togglePlay());
video.addEventListener("play", updateButton());
video.addEventListener("pause", updateButton());

toggle.addEventListener("click", togglePlay());
