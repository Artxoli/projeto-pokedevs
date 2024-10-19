const listaSelecaoPokedevs = document.querySelectorAll(".pokedev");

listaSelecaoPokedevs.forEach((pokedev) => {
  pokedev.addEventListener("click", () => {
    esconderCartaopokedev();

    const idPokedevSelecionado = desativarPokedevNaListagem(pokedev);

    ativarPokedevNaListagem(idPokedevSelecionado);
  });
});
function ativarPokedevNaListagem(idPokedevSelecionado) {
  const pokedevSelecionadoNaListagem =
    document.getElementById(idPokedevSelecionado);
  pokedevSelecionadoNaListagem.classList.add("ativo");
}

function desativarPokedevNaListagem(pokedev) {
  const idPokedevSelecionado = mostrarCartaoPokedevSelecionado(pokedev);
  const pokedevAtivoListagem = document.querySelector(".ativo");
  pokedevAtivoListagem.classList.remove("ativo");
  return idPokedevSelecionado;
}

function mostrarCartaoPokedevSelecionado(pokedev) {
  const idPokedevSelecionado = pokedev.attributes.id.value;
  const idDoCartaoPokedevParaAbrir = "cartao-" + idPokedevSelecionado;
  const cartaoPokedevParaAbrir = document.getElementById(
    idDoCartaoPokedevParaAbrir
  );
  cartaoPokedevParaAbrir.classList.add("aberto");
  return idPokedevSelecionado;
}

function esconderCartaopokedev() {
  const cartaoPokedevAberto = document.querySelector(".aberto");
  cartaoPokedevAberto.classList.remove("aberto");
}
