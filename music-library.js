function Library (name, creator) {
  this.name = name;
  this.creator = creator;
  this.playlists = [];
}

Library.prototype.addPlaylistToLibrary = function(playlist) {
  this.playlists.push(playlist);
 }
 

function Playlist (name) {
  this.name = name;
  this.tracks = [];
}

// let newPlaylist = playlists.push("")

// function Track(title, rating, length) {
//   this.title = title;
//   this.rating = rating;
//   this.length = length;
// }

// let newTrack = Object.create(Track);

//function that adds playlists and tracks to library
// PlaylistArray.prototype.addTrackToPlaylist = function() {

// }




//overallRating function that (in Playlist) which calculates
//the rating by averaging the rating of its tracks
Playlist.prototype.overallRating = function () {

}

//totalDuration function (in Playlist) which will sum the duration of all of its tracks
Playlist.prototype.totalDuration = function () {
  
}

let abclibrary = new Library("hi", "jkdh");
console.log(abclibrary);

let playlist1 = new Playlist("playlist1");

abclibrary.addPlaylistToLibrary(playlist1);
console.log(playlist1);



