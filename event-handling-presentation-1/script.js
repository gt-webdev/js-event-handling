var playlists = {
  'v a p o r w a v e' : [
    {
      'link': 'music/macintosh-plus.mp3',
      'on' : false
    }
  ], 'Blank Banshee' : [
    {
      'link': 'music/blank-banshee.mp3',
      'on' : false
    }
  ]
}

var currSong = {};

/* If music from this playlist is already playing, pause it */
/* If not, pause all other music and play this playlist */
function toggleMusic(e) {
  var name = e.getElementsByClassName("playlist-name")[0].innerHTML;
  var songs = playlists[name];

  //turn off whatever is currently playing
  if (Object.keys(currSong).length != 0 && currSong.on == true) {
    console.log("ay");
    currSong.audio.pause();
    currSong.on = false;

    if (currSong.link !== songs[0].link) {
      if (Object.keys(songs[0]).length == 3) {
        currSong = songs[0];
        currSong.audio.play();
        currSong.on = true;
      } else {
        start(songs[0]);
      }
    }
  } else if (Object.keys(currSong).length != 0 && currSong.on == false) {
    console.log("lmao");
    //check if this playlist was the last one playing
    checkLastPlayed(songs);
  } else {
    console.log("hola");
    start(songs[0]);
  }
}

function checkLastPlayed(songs) {
  var wasLastPlayed = false;

  for (var i = 0; i < songs.length; i++) {
    var s = songs[i];

    if (currSong.link === s.link) {
      currSong.audio.play();
      currSong.on = true;
      wasLastPlayed = true;
      break;
    }
  }

  if (wasLastPlayed == false) {
    start(songs[0]);
  }
}

function start(song) {
  currSong = song;
  currSong.audio = new Audio(song.link);
  currSong.audio.play();
  currSong.on = true;
}

function handleKeyPress(e) {
  var key = e.keyCode;
  console.log(key);
  if (key == 112) {
    if (Object.keys(currSong).length != 0 && currSong.on == true) {
      currSong.audio.pause();
      currSong.on = false;
    } else if (Object.keys(currSong).length != 0 && currSong.on == false) {
      currSong.audio.play();
      currSong.on = true;
    } else {
      start(playlists['v a p o r w a v e'][0]);
    }
  } else if (key == 119) {
    if (Object.keys(currSong).length != 0 && currSong.on == true) {
      if (currSong.audio.volume < 1)
        currSong.audio.volume += .1;
    }
  } else if (key == 115) {
    if (Object.keys(currSong).length != 0 && currSong.on == true) {
      if (currSong.audio.volume > 0)
        currSong.audio.volume -= .1;
    }
  }
}

function changeActivePlaylist(e) {
  var playlistPanel = document.getElementById("playlist-panel");
  var playlistObjs = playlistPanel.getElementsByClassName("playlist-single");

  var key = e.key;
  if (key == 38) {
    //find currently "active" playlist
  }
}
