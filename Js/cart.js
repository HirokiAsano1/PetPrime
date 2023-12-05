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
const totalAmountElement = document.getElementById('totalAmount');

let pricePerUnit = 76.99; // Defina o preço por unidade aqui

decreaseBtn.addEventListener('click', () => updateQuantity(-1));
increaseBtn.addEventListener('click', () => updateQuantity(1));

function updateQuantity(change) {
    let currentQuantity = parseInt(quantityInput.value) + change;
    if (currentQuantity > 0) {
        quantityInput.value = currentQuantity;
        calculateTotal();
    }
}

function calculateTotal() {
    let quantity = parseInt(quantityInput.value);
    let total = quantity * pricePerUnit;
    totalAmountElement.innerText = `R$ ${total.toFixed(2)}`;
}

  




