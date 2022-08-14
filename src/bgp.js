const photos = ["img/1.jpeg", "img/2.jpeg", "img/3.jpeg"];
const bgImage = document.createElement("img");

const randomPhoto = photos[Math.floor(Math.random() * photos.length)];

bgImage.src = `${randomPhoto}`;

document.body.appendChild(bgImage);
