document.addEventListener("DOMContentLoaded", function () {
  const imagesli = document.querySelector(".gallery1");
  const revealButton = document.querySelector(".revealgallery");
  revealButton.addEventListener("click", function () {
    revealButton.style.display = "none";
    mixButton.style.display = "block";
    createImages(imagesli);
  });
  const mixButton = document.querySelector(".mixgallery");
  mixButton.style.display = "mixgallery";
  mixButton.addEventListener("click", function () {
    mix(imagesli);
  });
});
function createImages(container) {
  container.innerHTML = "";
  for (let i = 1; i <= 12; i++) {
    const li = document.createElement("li");
    const img = document.createElement("img");
    img.src = `../images/img${i}.jpg`;
    img.alt = `nuotrauka ${i}`;
    li.appendChild(img);
    container.appendChild(li);
  }
}
function mix(container) {
  for (let i = container.children.length; i >= 0; i--) {
    container.appendChild(container.children[(Math.random() * i) | 0]);
  }
}