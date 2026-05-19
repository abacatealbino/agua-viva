const botao = document.getElementById("botao");
const mensagens = document.getElementById("mensagens");

botao.addEventListener("click", () => {

  mensagens.classList.toggle("hidden");

  if(botao.innerText === "mergulhar"){
    botao.innerText = "voltar";
  }

  else{
    botao.innerText = "mergulhar";
  }

});