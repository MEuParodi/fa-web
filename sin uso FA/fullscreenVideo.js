var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    videoId: 'qfGjEa0Vtcg',
    playerVars: {
        'autoplay':1,
        'controls':0,
        'rel':0,
        'showinfo':0,
        'autohide':1,
        'modestbranding':1,
        'mute':1,
        'loop':1,
        'disablekb':1,
        'playsinline':1,
        'mute':0,
    }
  });
}

const closeButton  = document.getElementById('buttonClose');
const scrollContainer1  = document.getElementById('scrollContainer');
const fullscreen = document.getElementById('fullscreen');
const header = document.getElementById('header');

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeVideo();
    }
});

//el if es para que no de error si no encuentra al elemento
if (closeButton){
    closeButton.addEventListener('click', function(event) { 
        closeVideo();
    });
}


scrollContainer1.addEventListener('click', function(event) { 
    player.playVideo();  
    // fullscreen.classList.toggle('show');
    fullscreen.classList.add('show');
    header.classList.add('noShow');

});

function closeVideo() {
    player.stopVideo();
    fullscreen.classList.remove('show');
    header.classList.remove('noShow');
}
