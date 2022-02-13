// ITEMS
const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

const CentroDeTarjetas = document.querySelector(".section-center");

let CentrodeBotones = document.querySelector(".btn-container");




window.addEventListener("DOMContentLoaded", function () {
  abrirMenu(menu);
  //
  fullBotones();


});






//cuando se le de click a desayuno, solo deben aparecer los que tengan un categoria de desayuno.


function abrirMenu(carta) {
  let desplegarMenu = carta.map(function (elemento) {
    let idComida = elemento.id;
    let titleComida = elemento.title;
    let categoryComida = elemento.category;
    let priceComida = elemento.price;
    let imgComida = elemento.img;
    let descComida = elemento.desc;
    return `<article class="menu-item">
    <img src="${imgComida}"  class="photo"alt="${titleComida}" srcset="">
  <div class="item-info">
    <header>
    <h4>${titleComida}</h4>
    <h4 class="price">${priceComida}$</h4>
    </header>
    <p class="item-text">${descComida}</p>
  </div>
  </article>`;
  });
  desplegarMenu = desplegarMenu.join("");
  CentroDeTarjetas.innerHTML = desplegarMenu;
}

function fullBotones () {
  const categoriasBotones = menu.reduce(
    function (valorTotal, item1) {
      if (!valorTotal.includes(item1.category)) {
        valorTotal.push(item1.category);
      }
      return valorTotal;
    },

    ["all"]
  );
  //
  console.log("categoria botones :" + categoriasBotones);
  const aplicarBotones = categoriasBotones.map(function(categ){
    return ` <button class="filter-btn" data-id="${categ}" type="button">${categ}</button>`
  }).join("");
  CentrodeBotones.innerHTML = aplicarBotones;
  const botones = document.querySelectorAll(".filter-btn");

  botones.forEach((btn) => {
    btn.addEventListener("click", function (elemento) {
      const toditos = "all";
      const category = elemento.currentTarget.dataset.id;
      const menudeCategoria = menu.filter((elementoMenu) => {
        if (elementoMenu.category == category) {
          return elementoMenu;
        }
      });
  
      console.log(menudeCategoria);
      abrirMenu(menudeCategoria);
    });
  });
}