// Criar o elemento do lightbox no HTML via JavaScript
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

const images = document.querySelectorAll('.gallery img');

// Adiciona evento de clique para abrir cada imagem
images.forEach(image => {
    image.addEventListener('click', e => {
        lightbox.classList.add('active');
        
        // Remove imagem anterior se houver
        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild);
        }
        
        // Cria e adiciona a nova imagem ampliada
        const img = document.createElement('img');
        img.src = image.src;
        lightbox.appendChild(img);
    });
});

// Fecha o lightbox ao clicar fora da imagem
lightbox.addEventListener('click', e => {
    if (e.target !== e.currentTarget) return;
    lightbox.classList.remove('active');
});