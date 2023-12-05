// Muda imagens de lugar
const imagens = document.querySelectorAll("#galeria li img")

function trocar (event) {
    const clicada = event.currentTarget;
    const principal = document.querySelector("#principal");
    principal.src = clicada.src
}

function galeriaClique(imagem){
    imagem.addEventListener("click", trocar)
}
imagens.forEach(galeriaClique)

//Dar zoom nas imagens quando passa o mouse
const images = document.querySelectorAll('img');
images.forEach(function(image) {
  image.addEventListener('mouseover', function() {
      // Aplica a transformação de escala para dar um efeito de zoom
      image.style.transform = 'scale(1.1)';
  });
  image.addEventListener('mouseout', function() {
      // Reverte a transformação de escala quando o mouse não estiver mais sobre a imagem
      image.style.transform = 'scale(1)';
  });
});

//daqui pra baixo é a configuração do botão de adicionar ou diminuir quantidade do produto
const quantityInput = document.getElementById('quantityInput');
const decreaseBtn = document.getElementById('decreaseBtn');
const increaseBtn = document.getElementById('increaseBtn');

decreaseBtn.addEventListener('click', () => updateQuantity(-1));
increaseBtn.addEventListener('click', () => updateQuantity(1));

function updateQuantity(change) {
    let currentQuantity = parseInt(quantityInput.value) + change;
    if (currentQuantity > 0) {
        quantityInput.value = currentQuantity;
    }
}


