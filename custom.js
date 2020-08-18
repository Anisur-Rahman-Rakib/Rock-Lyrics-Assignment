// Start Javascript 

// for basic Api handeling

function fetchLyric(songName){
    fetch(`https://api.lyrics.ovh/suggest/${songName}`)
    .then( response => response.json())
    .then(data => showResult(data))
}
document.getElementById('search-button').addEventListener('click' , function(){

    const songName = document.getElementById('input-song').value;
    fetchLyric(songName);
})


//  For Show Song title and Artist Name


function  showResult(data){
    console.log(data)
    document.getElementById('song-tittle-1').innerText= data.data[0].title;
    document.getElementById('song-album-1').innerText= data.data[0].artist.name;

    document.getElementById('song-tittle-2').innerText= data.data[1].title;
    document.getElementById('song-album-2').innerText= data.data[1].artist.name;

    document.getElementById('song-tittle-3').innerText= data.data[2].title;
    document.getElementById('song-album-3').innerText= data.data[2].artist.name;

    document.getElementById('song-tittle-4').innerText= data.data[3].title;
    document.getElementById('song-album-4').innerText= data.data[3].artist.name;

    document.getElementById('song-tittle-5').innerText= data.data[4].title;
    document.getElementById('song-album-5').innerText= data.data[4].artist.name;

    document.getElementById('song-tittle-6').innerText= data.data[5].title;
    document.getElementById('song-album-6').innerText= data.data[5].artist.name;

    document.getElementById('song-tittle-7').innerText= data.data[6].title;
    document.getElementById('song-album-7').innerText= data.data[6].artist.name;

    document.getElementById('song-tittle-8').innerText= data.data[7].title;
    document.getElementById('song-album-8').innerText= data.data[7].artist.name;

    document.getElementById('song-tittle-9').innerText= data.data[8].title;
    document.getElementById('song-album-9').innerText= data.data[8].artist.name;

    document.getElementById('song-tittle-10').innerText= data.data[9].title;
    document.getElementById('song-album-10').innerText= data.data[9].artist.name;

// for === Fancy results ===



    document.getElementById('song-tittle-11').innerText= data.data[10].title;
    document.getElementById('song-album-11').innerText= data.data[10].artist.name;

    document.getElementById('song-tittle-12').innerText= data.data[11].title;
    document.getElementById('song-album-12').innerText= data.data[11].artist.name;

    document.getElementById('song-tittle-13').innerText= data.data[12].title;
    document.getElementById('song-album-13').innerText= data.data[12].artist.name;

    document.getElementById('song-tittle-14').innerText= data.data[13].title;
    document.getElementById('song-album-14').innerText= data.data[13].artist.name;
}



// function  for song Lyrics


function ownTry(lyricId, artistId , titleId ,showLricId , showLyricIdBlock){
    document.getElementById(lyricId).addEventListener('click' , function(){
    let artistName = document.getElementById(artistId).innerText;
    let titleName = document.getElementById(titleId).innerText;
    fetch(`https://api.lyrics.ovh/v1/${artistName}/${titleName}`)      /*Another Api handeling for Song Lyrics */
    .then( response => response.json())
    .then(data => {
        // console.log(data)
        let showLyrics = data['lyrics'];
    

document.getElementById(showLricId).innerText = showLyrics;                                                  document.getElementById(showLyricIdBlock).style.display = "block"; 


document.getElementById('displayLyrics').style.display = "block";
 document.getElementById('displayLyrics').innerText =showLyrics;
    })
})
}


//  call function for Song Lyrics


ownTry('songLyric-1','song-album-1','song-tittle-1','displayFulLyrics-1','displayFulLyrics-1');
ownTry('songLyric-2','song-album-2','song-tittle-2','displayFulLyrics-2','displayFulLyrics-2');
ownTry('songLyric-3','song-album-3','song-tittle-3','displayFulLyrics-3','displayFulLyrics-3');
ownTry('songLyric-4','song-album-4','song-tittle-4','displayFulLyrics-4','displayFulLyrics-4');
ownTry('songLyric-5','song-album-5','song-tittle-5','displayFulLyrics-5','displayFulLyrics-5');
ownTry('songLyric-6','song-album-6','song-tittle-6','displayFulLyrics-6','displayFulLyrics-6');
ownTry('songLyric-7','song-album-7','song-tittle-7','displayFulLyrics-7','displayFulLyrics-7');
ownTry('songLyric-8','song-album-8','song-tittle-8','displayFulLyrics-8','displayFulLyrics-8');
ownTry('songLyric-9','song-album-9','song-tittle-9','displayFulLyrics-9','displayFulLyrics-9');
ownTry('songLyric-10','song-album-10','song-tittle-10','displayFulLyrics-10','displayFulLyrics-10');


// for fency Lyrics Results...................

ownTry('songLyric-11','song-album-11','song-tittle-11','displayFulLyrics-11','displayFulLyrics-11');

ownTry('songLyric-12','song-album-12','song-tittle-12','displayFulLyrics-12','displayFulLyrics-12');

ownTry('songLyric-13','song-album-13','song-tittle-13','displayFulLyrics-13','displayFulLyrics-13');

ownTry('songLyric-14','song-album-14','song-tittle-14','displayFulLyrics-14','displayFulLyrics-14');





//JUST END................
