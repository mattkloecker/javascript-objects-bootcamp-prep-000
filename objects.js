var playlist = {
 zztop: "lowrider"
  }
function updatePlaylist(listname, artistName, songTitle){
 listname[artistName] = songTitle;
  return listname
}

function removeFromPlaylist(listname, artistname){
  delete listname.artistName
  return listname
}
