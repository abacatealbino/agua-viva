const paginas = document.querySelectorAll(".pagina");

function esconderTudo(){

  paginas.forEach((pagina) => {
    pagina.classList.remove("ativa");
  });

}

function abrirAlbuns(){

  esconderTudo();

  document
  .getElementById("albuns")
  .classList.add("ativa");

}

function abrirPagina(id){

  esconderTudo();

  document
  .getElementById(id)
  .classList.add("ativa");

}

function voltar(){

  esconderTudo();

  document
  .getElementById("albuns")
  .classList.add("ativa");

}