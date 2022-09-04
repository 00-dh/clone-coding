const photos = ["img/1.jpg", "img/2.jpg", "img/3.jpg"];
const bgImage = document.createElement("img");

const randomPhoto = photos[Math.floor(Math.random() * photos.length)];

bgImage.src = `${randomPhoto}`;

document.body.appendChild(bgImage);
