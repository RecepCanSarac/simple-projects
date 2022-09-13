const image = [
  {
    id: 1,
    resim: "manzara2.jpg",
    icerik:"loremasşfknsldgndsgknslkfnakl"
  },
  {
    id: 2,
    resim: "manzara3.jpg",
  },
  {
    id: 3,
    resim: "manzara.jpg",
  },
  {
    id: 4,
    resim: "resim2.jpg",
  },
];

//selcet items

const img = document.getElementById("img");

const prevBtn = document.getElementById("btn-prev");
const nextBtn = document.getElementById("btn-next");

//set starting item
let currentItem = 0;

//load intial item
window.addEventListener("DOMContentLoaded", function () {
  imgDownload();
});

function imgDownload() {
  const item = image[currentItem];
  img.src = item.resim;
}

//btnNext

nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > image.length - 1) {
    currentItem = 0;
  }
  imgDownload();
});

//btnPrev
prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = image.length - 1;
  }
  imgDownload();
});
