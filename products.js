const products = [
  {
    title: "Uva Crimson",
    price: 8.99,
    category: "Frutas",
    image: undefined,
    imageDescription: "Imagem Uva",
  },
  {
    title: "Banana",
    price: 5.69,
    category: "Frutas",
    image: "./img/products/product_2.svg",
    imageDescription: "Imagem Banana",
  },
  {
    title: "Mamão",
    price: 4.99,
    category: "Frutas",
    image: "./img/products/product_3.svg",
    imageDescription: "Imagem Mamão",
  },
  {
    title: "Maçã",
    price: 9.2,
    category: "Frutas",
    image: "./img/products/product_4.svg",
    imageDescription: "Imagem Maçã",
  },
  {
    title: "Refrigerante",
    price: 8.99,
    category: "Bebidas",
    image: undefined,
    imageDescription: "Imagem Refrigerante",
  },
  {
    title: "Vinho",
    price: 8.99,
    category: "Bebidas",
    image: "./img/products/product_6.svg",
    imageDescription: "Imagem Vinho",
  },
  {
    title: "Água Tônica",
    price: 8.99,
    category: "Bebidas",
    image: undefined,
    imageDescription: "Imagem Água Tônica",
  },
  {
    title: "Água de coco",
    price: 8.99,
    category: "Bebidas",
    image: "./img/products/product_8.svg",
    imageDescription: "Imagem Água de coco",
  },

  {
    title: "Sabonete",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_9.svg",
    imageDescription: "Imagem Sabonete",
  },

  {
    title: "Detergente",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_10.svg",
    imageDescription: "Imagem Detergente",
  },

  {
    title: "Limpa superfícies",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_11.svg",
    imageDescription: "Imagem Limpa superfícies",
  },

  {
    title: "Lustra Móveis",
    price: 8.99,
    category: "Higiene",
    image: undefined,
    imageDescription: "Imagem Lustra Móveis",
  },
];



// funçao das frutas

function fruta(products) {

  
  let sectionfrutas = document.createElement("section");
  sectionfrutas.classList.add("products-section");
  let h1frutas = document.createElement("h1");
  let mainfrutas = document.createElement("main");
  mainfrutas.classList.add("products-content");
  let ulfrutas = document.createElement("ul");

  
  h1frutas.innerText = "Frutas";
  sectionfrutas.appendChild(h1frutas);

  for (let i = 0; i < products.length; i++) {
    let li = document.createElement("li");
    li.classList.add("product");

    let imgfruta = document.createElement("img");
    let mainprodutofruta = document.createElement("main");
    mainprodutofruta.classList.add("product-main");
    let h1titulofruta = document.createElement("h1");
    let h5produtocategoriafruta = document.createElement("h5");
    let strongvalorfruta = document.createElement("strong");

    if (products[i].image == undefined) {
      imgfruta.src = "./img/products/no-img.svg";
      imgfruta.classList.add("product-img");
    } else {
      imgfruta.src = products[i].image;
      imgfruta.classList.add("product-img");
    }

    li.appendChild(imgfruta);

    h1titulofruta.innerText = products[i].title;
    h1titulofruta.classList.add("product-title");
    mainprodutofruta.appendChild(h1titulofruta);
    h5produtocategoriafruta.innerText = products[i].category;
    h5produtocategoriafruta.classList.add("product-category");
    mainprodutofruta.appendChild(h5produtocategoriafruta);
    strongvalorfruta.innerText = products[i].price.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
    strongvalorfruta.classList.add("product-price");
    mainprodutofruta.appendChild(strongvalorfruta);

    li.appendChild(mainprodutofruta);

    ulfrutas.appendChild(li);
  }

  mainfrutas.appendChild(ulfrutas);
  sectionfrutas.appendChild(mainfrutas);

  
  return sectionfrutas;
}

fruta(products);



// funçao das bebidas

function bebidas(products) {

  
  let sectionbebidas = document.createElement("section");
  sectionbebidas.classList.add("products-section");
  let h1bebidas = document.createElement("h1");
  let mainbebidas = document.createElement("main");
  mainbebidas.classList.add("products-content");
  let ulbebidas = document.createElement("ul");

  
  h1bebidas.innerText = "Bebidas";
  sectionbebidas.appendChild(h1bebidas);

  for (let i = 0; i < products.length; i++) {
    let li = document.createElement("li");
    li.classList.add("product");

    let imgbebidas = document.createElement("img");
    let mainprodutobebidas = document.createElement("main");
    mainprodutobebidas.classList.add("product-main");
    let h1titulobebidas = document.createElement("h1");
    let h5produtocategoriabebidas = document.createElement("h5");
    let strongvalorbebidas = document.createElement("strong");

    if (products[i].image == undefined) {
      imgbebidas.src = "./img/products/no-img.svg";
      imgbebidas.classList.add("product-img");
    } else {
      imgbebidas.src = products[i].image;
      imgbebidas.classList.add("product-img");
    }

    li.appendChild(imgbebidas);

    h1titulobebidas.innerText = products[i].title;
    h1titulobebidas.classList.add("product-title");
    mainprodutobebidas.appendChild(h1titulobebidas);
    h5produtocategoriabebidas.innerText = products[i].category;
    h5produtocategoriabebidas.classList.add("product-category");
    mainprodutobebidas.appendChild(h5produtocategoriabebidas);
    strongvalorbebidas.innerText = products[i].price.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
    strongvalorbebidas.classList.add("product-price");
    mainprodutobebidas.appendChild(strongvalorbebidas);

    li.appendChild(mainprodutobebidas);

    ulbebidas.appendChild(li);
  }

  mainbebidas.appendChild(ulbebidas);
  sectionbebidas.appendChild(mainbebidas);

  
  return sectionbebidas;
}

bebidas (products)



// funçao da higiene


function higiene(products) {

  
  let sectionhigiene = document.createElement("section");
  sectionhigiene.classList.add("products-section");
  let h1higiene = document.createElement("h1");
  let mainhigiene = document.createElement("main");
  mainhigiene.classList.add("products-content");
  let ulhigiene = document.createElement("ul");

  
  h1higiene.innerText = "Higiene";
  sectionhigiene.appendChild(h1higiene);

  for (let i = 0; i < products.length; i++) {
    let li = document.createElement("li");
    li.classList.add("product");

    let imghigiene = document.createElement("img");
    let mainprodutohigiene = document.createElement("main");
    mainprodutohigiene.classList.add("product-main");
    let h1titulohigiene = document.createElement("h1");
    let h5produtocategoriahigiene = document.createElement("h5");
    let strongvalorhigiene = document.createElement("strong");

    if (products[i].image == undefined) {
      imghigiene.src = "./img/products/no-img.svg";
      imghigiene.classList.add("product-img");
    } else {
      imghigiene.src = products[i].image;
      imghigiene.classList.add("product-img");
    }

    li.appendChild(imghigiene);

    h1titulohigiene.innerText = products[i].title;
    h1titulohigiene.classList.add("product-title");
    mainprodutohigiene.appendChild(h1titulohigiene);
    h5produtocategoriahigiene.innerText = products[i].category;
    h5produtocategoriahigiene.classList.add("product-category");
    mainprodutohigiene.appendChild(h5produtocategoriahigiene);
    strongvalorhigiene.innerText = products[i].price.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
    strongvalorhigiene.classList.add("product-price");
    mainprodutohigiene.appendChild(strongvalorhigiene);

    li.appendChild(mainprodutohigiene);

    ulhigiene.appendChild(li);
  }

  mainhigiene.appendChild(ulhigiene);
  sectionhigiene.appendChild(mainhigiene);

  
  return sectionhigiene;
}

higiene (products)


// função pra fazer a diferenciação de categoria

function diferenciar(products) {
  let auxfruta = [];
  let auxbebidas = [];
  let auxhigiene = [];
  for (let i = 0; i < products.length; i++) {
    if (products[i].category == "Frutas") {
      auxfruta.push(products[i]);
    }
    else if (products[i].category == "Bebidas")
  {
    auxbebidas.push(products[i]);
  }
  else if (products[i].category == "Higiene") {
    auxhigiene.push(products[i]);

  }
}
let maingeral = document.querySelector(".container")
  maingeral.appendChild(fruta(auxfruta))
  maingeral.appendChild(bebidas(auxbebidas))
  maingeral.appendChild(higiene(auxhigiene))

  return maingeral
}
diferenciar(products)


