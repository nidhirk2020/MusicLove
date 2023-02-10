console.log("Welcome to MusicLove")
let songIndex=0;
let audioElement = new Audio('I Love You.mp3');
let masterPlay =document.getElementById('masterPlay');
let masterSongName =document.getElementById('masterSongName');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs =[
   
        {songName:"I Love You" , filePath:"song/I Love You.mp3" , coverPath:"covers/cover1.jpg"},
        {songName:"Apna Bana Le" , filePath:"song/2.mp3" , coverPath:"covers/cover2.jpg"},
        {songName:"Gul" , filePath:"song/3.mp3" , coverPath:"covers/cover3.jpg"},
        {songName:"Dil Diyan Gallan" , filePath:"song/4.mp3" , coverPath:"covers/cover4.jpeg"},
        {songName:"Tum Se Hi" , filePath:"song/5.mp3" , coverPath:"covers/cover5.jpeg"},
        {songName:"Phela Naha" , filePath:"song/6.mp3" , coverPath:"covers/cover6.jpeg"},
        {songName:"Ishq Sufiyana" , filePath:"song/7.mp3" , coverPath:"covers/cover7.jpeg"},
        {songName:"Subanallah" , filePath:"song/8.mp3" , coverPath:"covers/cover8.jpg"},

]
 songItems.forEach((element,i) => {
    console.log(element,i);
    element.getElementsByTagName("img")[0].src =songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText =songs[i].songName;
 });


// audioElement.play();

//play pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else{
         audioElement.pause();
          masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;
       
    }

})

//Listen to events
audioElement.addEventListener ('timeupdate',()=>{
    console.log('timeUpdate');
    //update seeker

progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
console.log(progress);
myProgressBar.value=progress;

})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100 ;
})

const makeAllPlays=()=>{
  
  Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.classList.add('fa-circle-play');
    element.classList.remove('fa-circle-pause');
  })
}





Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    //   makeAllPlays();
    element.addEventListener('click',(e)=>{
       
        makeAllPlays();
         
        songIndex=parseInt(e.target.id);
       e.target.classList.remove('fa-circle-play');
         e.target.classList.add('fa-circle-pause');

       audioElement.src=`song/${songIndex}.mp3`;
       masterSongName.innerText=songs[songIndex-1].songName;
       audioElement.currentTime =0;
       audioElement.play();
         gif.style.opacity=1;
        masterPlay.classList.add('fa-circle-pause');
        masterPlay.classList.remove('fa-circle-play');

    })

    
})

document.getElementById('next').addEventListener('click',()=>{

   if(songIndex>=8) {
    songIndex=1;
   }
   else{
   songIndex+=1;
   }
    audioElement.src=`song/${songIndex}.mp3`;
      masterSongName.innerText=songs[songIndex-1].songName;
       audioElement.currentTime =0;
       audioElement.play();
       gif.style.opacity=1;
        masterPlay.classList.add('fa-circle-pause');
        masterPlay.classList.remove('fa-circle-play');

})

document.getElementById('previous').addEventListener('click',()=>{
   if(songIndex<1) {
    songIndex=8;
   }
   else{
   songIndex-=1;
   }
    audioElement.src=`song/${songIndex}.mp3`;
     masterSongName.innerText=songs[songIndex-1].songName;
       audioElement.currentTime =0;
       audioElement.play();
         gif.style.opacity=1;
        masterPlay.classList.add('fa-circle-pause');
        masterPlay.classList.remove('fa-circle-play');

})