<<<<<<< HEAD
var playlist = {
  "CJ":"love me"
}

function updatePlaylist (playlist, artistName, songTitle){
 playlist[artistName] = songTitle
 return playlist
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName]
  return playlist
=======
var playlist = {CJ:"love me"};

function updatePlaylist (playlist, key, value){
  return object.assign({'Untitled'}, playlist, {[key]:value})
>>>>>>> 47a16295fbe2feff5d02317fef014979fd6777f2
}