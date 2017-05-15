trackLength = 0;
tracks = {};
var addTrack = function(instrument,value,position){
  if(tracks[instrument] == undefined)tracks[instrument] = {};
  tracks[instrument][position] = value;
  trackLength = position + 1;
}
var playingNow = {};

var loopey;
var playY = function(){
  i = 0;
  loopey = setInterval(function(){
    for(key in tracks){
      if(tracks[key][i]!=undefined){
        if(playingNow[key] || playingNow[key] == 0){
          instruments[key][playingNow[key]].pause();
          instruments[key][playingNow[key]].currentTime = 0;
        }
        instruments[key][tracks[key][i]].play();
        playingNow[key] = tracks[key][i];
      }
    }
    i = i + 1;
    if(i == trackLength)clearInterval(loopey);
  },1000);
}

var callB = function(instruments){
  this.instruments=instruments;
}

var stopY = function(){
  clearInterval(loopey);
  for(key in tracks){
    if(playingNow[key]!=undefined){
      this.instruments[key][playingNow[key]].pause();
      this.instruments[key][playingNow[key]].currentTime = 0;
    }
  }
<<<<<<< HEAD
}
=======
}
>>>>>>> 0da295573b877e238f13f996267a0a27f389c612