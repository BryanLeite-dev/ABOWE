const reviews = [
  {
    id: 1,
	name: "Brunimations",
    job: "Animador e Ilustrador",
	rede: "@brunimationsanimations",
    img:
      "img/Bruno.png",
    text:
      "A chave para se criar é imaginar!",
    
  },
  {
    id: 2,
	name: "DarkP8",
    job: "Programador e Game Designer",
	rede: "@P8Dark",
    img:
      "img/Eduardo.png",
    text:
      "A narrativa da vida é nossa principal inspiração.",
  },
  {
    id: 3,
    name: "Henri",
    job: "Auxiliar de Produção",
	rede: "@henritubosaka",
    img:
      "img/Henri1.jpg",
    text:
      "Ninguém precisa ser perfeito, mas tem capacidade de ser o seu melhor.",
  },
  {
    id: 4,
	name: "Bryan",
    job: "Programador Web",
    rede: "@um_certo_bryan",
    img:
      "img/Bryan.jpeg",
    text:
      "Qual a graça de ser normal em um mundo anormal?",
    
  },
  {
    id: 5,
    name: "Douglas",
    job: "Programador e Design",
	rede: "@douglas_santos_melo",
    img:
      "img/Douglas.jpg",
    text:
      "É na forma do sorriso que consigo demonstrar palavras que não sei dizer.",
  },
  {
    id: 6,
    name: "Guilherme",
    job: "Diretor de Marketing e Design",
	rede: "@gui_0810x",
    img:
      "img/Guilherme.png",
    text:
      "Por que inimigos, se podemos ser amigos?",
  },
  
];
// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const rede = document.getElementById("rede");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  rede.textContent = item.rede;
  info.textContent = item.text;
});

// show person based on item
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  rede.textContent = item.rede;
  info.textContent = item.text;
}
// show next person
nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
// show prev person
prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});
// show random person


