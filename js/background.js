const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
const bgGradient = document.createElement("div");

bgGradient.className = "bg-gradient";

const chosenImageSet = () => {
  const randomNum = Math.trunc(Math.random() * 5);
  bgImage.src = `img/${randomNum}.jpg`;
};

chosenImageSet();
setInterval(chosenImageSet, 30000);

document.querySelector("body").appendChild(bgImage);
document.querySelector("body").appendChild(bgGradient);
