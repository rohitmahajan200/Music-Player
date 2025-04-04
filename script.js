const allSongs = [
  {
    name: "Tum Hi Ho",
    info: {},
    image:
      "https://www.labiotech.eu/wp-content/uploads/2016/10/guitar-singing-music-song-Rawpixel.com-fi-1200x675.jpeg",
    mp3: "",
  },
  {
    name: "Aishwarya",
    info: {},
    image:
      "https://images.saymedia-content.com/.image/t_share/MTc0NDY3NzczNzY0NzQwNDU2/hindi-bollywood-songs-top-100-best-songs-of-all-time.jpg",
    mp3: "",
  },
  {
    name: "Rahul hmmm",
    info: {},
    image:
      "https://images.saymedia-content.com/.image/t_share/MTc0NDczNjM4Mjc0MTQ3OTc0/top-120-hindi-love-songs-from-the-early-2000s.jpg",
    mp3: "",
  },
];

const fav_songs = [];

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
  i.classList.add("fa-regular", "fa-heart", "fa-xl" ,"like-btn");

  i.addEventListener("click", (event) => {
    //const song = item.parentElement.parentElement;
    if (card.classList.contains("favorite")) {
      i.classList.replace("fa-solid", "fa-regular");
      card.classList.remove("favorite");
      fav_songs.splice(index,1);
      window.localStorage.removeItem(index);
    } else {
      i.classList.replace("fa-regular", "fa-solid");
      card.classList.add("favorite");
      fav_songs.push(index)
      window.localStorage.setItem(index,item.name);
    }
  });

  const img = document.createElement("img");
  img.style.width ="300px";
  img.style.height ="300px";
  img.src=item.image;

  const audio = document.createElement("audio");
  audio.style = "margin-left: 14px;";
  audio.src = item.mp3;
  audio.controls=true

  cardinner.appendChild(i);
  cardinner.appendChild(img);

  card.appendChild(strong);
  card.appendChild(cardinner);
  card.appendChild(audio);
  main.appendChild(card)
});


console.log(fav_songs);

