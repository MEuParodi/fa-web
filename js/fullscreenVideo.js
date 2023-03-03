var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    videoId: 'H1gn4K4qfBU',
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
    }


  });
}

const closeButton  = document.getElementById('buttonClose');
const scrollContainer1  = document.getElementById('scrollContainer');
const fullscreen = document.getElementById('fullscreen');

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeVideo()
    }
});

if (closeButton){
    closeButton.addEventListener('click', function(event) { 
        closeVideo()
    });
}


scrollContainer1.addEventListener('click', function(event) { 
    player.seekTo(0);
    player.playVideo();  
    fullscreen.classList.toggle('show');
});

function closeVideo() {
    player.stopVideo();
    fullscreen.classList.remove('show');
}
