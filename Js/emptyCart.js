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
