class resultado {
  constructor(texto) {
    //Registra el path de la imagen, una cadena de texto y un hipervínculo en this
    this.texto = texto;
  }

  elemento() {
    //Crea un article para contener la noticia
    let articulo = document.createElement("article"),
      //Crea un párrafo para asociarlo al article con el texto que está en this
      parrafo = document.createElement("p");

    parrafo.innerHTML = this.texto;


    articulo.classList.add("resultado");
    articulo.appendChild(parrafo);

    //retorna un article resultado que contiene una imagen y un texto
    return articulo;
  }
}
