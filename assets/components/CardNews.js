class CardNews extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(this.build());
    shadow.appendChild(this.styles());
  }

  build() {
    //Adicionando a div + classe card
    const componentRoot = document.createElement("div");
    componentRoot.setAttribute("class", "card");

    //Criando os componentes da coluna da Esquerda
    //Adicionando a div + classe card__left
    const cardLeft = document.createElement("div");
    cardLeft.setAttribute("class", "card__left");
    const autor = document.createElement("span");
    autor.textContent = "By " + (this.getAttribute('autor') || "Anonimous");

    const linkTitle = document.createElement("a");
    linkTitle.textContent = this.getAttribute('title');
    linkTitle.href = this.getAttribute('link-url');

    const newsContent = document.createElement("p");
    newsContent.textContent = this.getAttribute("content");

    cardLeft.appendChild(autor);
    cardLeft.appendChild(linkTitle);
    cardLeft.appendChild(newsContent);

    //Criando os componentes da coluna da Direita
    //Adicionando a div + card__right
    const cardRight = document.createElement("div");
    cardRight.setAttribute("class", "card__right");
    const newsImage = document.createElement("img");
    newsImage.src = this.getAttribute("photo") || "/src/imagens/default.png";
    newsImage.alt = 'Foto da notícia';

    cardRight.appendChild(newsImage);

    //Linkando tudo no documento HTML
    componentRoot.appendChild(cardLeft);
    componentRoot.appendChild(cardRight);

    return componentRoot;
  }

  styles() {
    const style = document.createElement("style");
    style.textContent = `
    .card {
        width: 75%;
        display: flex;
        flex-direction: row;
        box-shadow: 7px 7px 28px 0px rgba(0, 0, 0, 0.75);
        -webkit-box-shadow: 7px 7px 28px 0px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 7px 7px 28px 0px rgba(0, 0, 0, 0.75);
        justify-content: space-between;
    }
    
    .card__left {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 10px;
    }
    
    .card__left>span {
        font-weight: bold;
    }
    
    .card__left>a {
        margin-top: 15px;
        font-size: 25px;
        font-weight: bold;
        color: #000;
        text-decoration: none;
    }
    
    .card__left>p {
        color: rgb(70, 70, 70);
    }
    `;

    return style;
  }
}

customElements.define("card-news", CardNews);
