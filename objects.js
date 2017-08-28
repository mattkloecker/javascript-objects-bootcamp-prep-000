var playlist = {
 zztop: "lowrider"
  }
function updatePlaylist(listname, artistName, songTitle){
 listname[artistName] = songTitle;
  return listname
}

function removeFromPlaylist(playlist, artistName){
  delete playlist.artistName;
  return playlist
}
