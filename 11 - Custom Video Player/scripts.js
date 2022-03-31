/* Get our Elements */
const player =  document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');

const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');



/* Build out our functions */


function togglePlay(){
if(video.paused)
{
    video.play();
} else
    {
    video.pause();
    }
}

function updateButton(){
    const icon = this.paused ? '►' : '❚ ❚';
    toggle.textContent = icon; 
}


function skip(){
console.log(this.dataset);
console.log(video);
console
if(this.dataset.skip === "25"){
    video.currentTime += parseFloat(this.dataset.skip);
}
if(this.dataset.skip === "-10"){
    video.currentTime += parseFloat(this.dataset.skip);
}
}


function updateProgress(){
    const percent = (video.currentTime / video.duration) * 100; 
    progressBar.style.flexBasis = `${percent}%`; 

}

function handleRangeUpdate(){
    video[this.name] = this.value;
}



/*Build webhooks */
video.addEventListener('timeUpdate', updateProgress);

video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('click', togglePlay);
toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(button => button.addEventListener('change', handleRangeUpdate));
ranges.forEach(button => button.addEventListener('mousemove', handleRangeUpdate));

video.addEventListener('play', updateButton);