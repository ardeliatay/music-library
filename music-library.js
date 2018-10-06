function Library (name, creator) {
  this.name = name;
  this.creator = creator;
  this.playlists = [];
}

function Playlist (name) {
  this.name = name;
  this.tracks = [];
}

function Track(title, rating, length) {
  this.title = title;
  this.rating = rating;
  this.length = length;
}

Library.prototype.addPlaylistToLibrary = function(playlist) {
  this.playlists.push(playlist);
}

Playlist.prototype.addTrackToPlaylist = function(track) {
  this.tracks.push(track);
}

// overallRating function that (in Playlist) which calculates
// the rating by averaging the rating of its tracks
Playlist.prototype.overallRating = function() {
  let rating = 0;
  let count = 0;
  
  this.tracks.forEach((track) => {
    rating += Number(track.rating);
    count++
  })
  let avg = rating / count;
  return avg;
}

//totalDuration function (in Playlist) which will sum the duration of all of its tracks
Playlist.prototype.totalDuration = function () {
  let sum = 0;
  this.tracks.forEach((track) => {
    sum += Number(track.length);
  })
  return sum;
}

let library1 = new Library("Dia", "My library");
let playlist1 = new Playlist("playlist1");
let playlist2 = new Playlist("playlist2");
let track1 = new Track ("Snacks", "5", "300")
let track2 = new Track ("More snacks", "4", "450")

playlist1.addTrackToPlaylist(track1);
playlist1.addTrackToPlaylist(track2);
library1.addPlaylistToLibrary(playlist1);

console.log(playlist1)
console.log(library1)















