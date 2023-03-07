//pone autoplay al video
  var video = document.getElementsByTagName('video')[0];
  video.addEventListener('canplaythrough', function() {
    video.play();
  });

