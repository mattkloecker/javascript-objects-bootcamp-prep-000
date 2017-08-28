var playlist = {
 zztop: "lowrider"
  }
function updatePlaylist(listname, artistName, songTitle){
 listname[artistName] = songTitle;
  return listname
}

function removeFromPlaylist(listname, artistName){
  delete listname.artistName;
  return listname
}
