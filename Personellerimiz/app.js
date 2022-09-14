const person = [
  {
    id: 1,
    img: "personel1.jpg",
    job: "web developer",
    name: "Ahmet Saraç",
    icerik:
      "Daha geniş bir ifadeyle, paragraf bir duyguyu, bir düşünceyi, bir isteği, bir durumu, bir öneriyi, olayın bir yönünü, yalnızca bir yönüyle anlatım tekniklerinden ve düşünceyi geliştirme yollarından yararlanarak anlatan yazı türüdür.  cümleleri, cümleler paragrafları, paragraflar da yazıları oluşturur.",
  },
  {
    id: 2,
    img: "personel2.png",
    job: "web dizayner",
    name: "Yusuf Çalışkan",
    icerik:
      "Herhangi bir düşünceyi ifade eden ve belirlenen düşünceyi ana düşünceyle destekleyen yazıların tamamına paragraf deniliyor. Cümleler topluluğu olarak da kısaca tanımı yapılabiliyor. Her bir cümle birbirleriyle mutlaka aynı anlamda olmalıdır. Her zaman düşünceler ana düşüncelerle birlikte desteklenmelidir.",
  },
  {
    id: 2,
    img: "personel3.png",
    job: "Coding",
    name: "Altan Şen",
    icerik:
      "Günlük çözeceğimiz 20-30 arasındaki paragraf sorusu; okuduğunu anlama, yorumlama, çıkarımda bulunma gibi becerilerimizin gelişmesine oldukça yarar sağlayacaktır. Ayrıca paragraf sorusu çözerek ve kitap okuyarak okuma hızımızı artırabiliriz ki bu da sınavda oldukça işimize yarayacaktır.",
  },
];

const img = document.getElementById("img-item");
const job = document.getElementById("job-item");
const name = document.getElementById("name-item");
const icerik = document.getElementById("icerik-item");

const prevBtn = document.getElementById("btn-prev");
const nextBtn = document.getElementById("btn-next");
const meBtn = document.getElementById("btn-me");
//First Loaded
let itemNumber = 0;

window.addEventListener("DOMContentLoaded", function () {
  itemLoaded();
});

function itemLoaded() {
  const item = person[itemNumber];
  img.src = item.img;
  job.textContent = item.job;
  name.textContent = item.name;
  icerik.textContent = item.icerik;
}

prevBtn.addEventListener("click", function () {
  itemNumber--;
  if (itemNumber < 0) {
    itemNumber = person.length - 1;
  }
  itemLoaded();
});
nextBtn.addEventListener("click", function () {
  itemNumber++;
  if (itemNumber > person.length - 1) {
    itemNumber = 0;
  }
  itemLoaded();
});

meBtn.addEventListener("click", function () {
  let random = Math.round(Math.random() * 2);

  itemNumber = random;

  itemLoaded();
});
