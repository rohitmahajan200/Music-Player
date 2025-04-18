export const allSongs = [
  {
    name: "Tum Hi Ho",
    info: {
      album:"abc",
      singer:"xyz",
      year:"1997",
    },
    image:
      "https://www.labiotech.eu/wp-content/uploads/2016/10/guitar-singing-music-song-Rawpixel.com-fi-1200x675.jpeg",

    mp3:"mp3/_Tum Hi Ho_ Aashiqui 2 Full Song With Lyrics _ Aditya Roy Kapur, Shraddha Kapoor.mp3",
  },
  {
    name: "Aishwarya",
    info: {
      album:"abc",
      singer:"xyz",
      year:"1997",
    },
    image:
      "https://images.saymedia-content.com/.image/t_share/MTc0NDY3NzczNzY0NzQwNDU2/hindi-bollywood-songs-top-100-best-songs-of-all-time.jpg",
    mp3: "",
  },
  {
    name: "Rahul hmmm",
    info: {
      album:"abc",
      singer:"xyz",
      year:"1997",
    },
    image:
      "https://images.saymedia-content.com/.image/t_share/MTc0NDczNjM4Mjc0MTQ3OTc0/top-120-hindi-love-songs-from-the-early-2000s.jpg",
    mp3: "",
  },
];


//index page section
if(document.getElementById("main")){
allSongs.forEach((item, index) => {
  
  const main=document.getElementById("main");

  const card = document.createElement("div");
  card.classList.add("card");

  const strong = document.createElement("strong");
  strong.textContent = item.name;

  const cardinner = document.createElement("div");
  cardinner.style.position = "relative";

  const i = document.createElement("i");
  i.style.color = "red";
  if(localStorage.getItem(index)){
    i.classList.add("fa-solid", "fa-heart", "fa-xl" ,"like-btn");
  }
  else{
    i.classList.add("fa-regular", "fa-heart", "fa-xl" ,"like-btn");
  }
  

  i.addEventListener("click", (event) => {
    if (card.classList.contains("favorite")) {
      i.classList.replace("fa-solid", "fa-regular");
      card.classList.remove("favorite");
      // fav_songs.splice(index,1);
      window.localStorage.removeItem(index);
      // console.log(fav_songs);
    } else {
      i.classList.replace("fa-regular", "fa-solid");
      card.classList.add("favorite");
      // fav_songs.push(index)
      window.localStorage.setItem(index,item.name);
      // console.log(fav_songs);
    }
  });

  const img = document.createElement("img");
  img.style.width ="300px";
  img.style.height ="300px";
  img.src=item.image;

  const audio = document.createElement("audio");
  audio.style = "margin-left: 14px;";
  audio.src =item.mp3;
  audio.controls=true

  cardinner.appendChild(i);
  cardinner.appendChild(img);

  card.appendChild(strong);
  card.appendChild(cardinner);
  card.appendChild(audio);
  main.appendChild(card);
});
}

//for fav page
if(localStorage.length >0){
  for (const key in localStorage) {
    if(typeof localStorage[key] != "function"){
  
      const container=document.createElement('li');
      container.classList.add("fav-card");
    
      const img=document.createElement('img');
      img.src=allSongs[key].image
      img.classList.add("fav-img");
    
      const info=document.createElement('div');
      info.style="margin:20px"

      const name=document.createElement('p')
      name.textContent=`Song Name -${allSongs[key].name}`
      info.appendChild(name);

      const singer=document.createElement('p')
      singer.textContent=`Artist -${allSongs[key].info.singer}`
      info.appendChild(singer);

      const album=document.createElement('p')
      album.textContent=`Album -${allSongs[key].info.album}`
      info.appendChild(album);

      const year=document.createElement('p')
      year.textContent=`Year -${allSongs[key].info.year}`
      info.appendChild(year);
      
      
      const audio = document.createElement("audio");
      audio.src =allSongs[key].mp3;
      audio.controls=true
      
      container.appendChild(img);
      console.log(info);
      
      container.appendChild(info);
      container.appendChild(audio);
    
      document.getElementById("fav-list").appendChild(container);
    } 
}
}
else{
  const none=document.createElement('li');
  none.textContent="Song no present in favorites please like the song to add."

  document.getElementById("fav-list").appendChild(none);

}

//for artist
const artist=[
  {
    name:"name",
    albums:[
      {
        name:"",
        songs:[],
      }
    ]
  }
];
class Artist{
  constructor(name,song,album,year){
    this.name=name;
    this.song=song;
    this.album=album;
    this.year=year
  }
  addSong(){
    for (const key in artist) {
      
    }

  }
}
allSongs.map((item,index)=>{

})



      



