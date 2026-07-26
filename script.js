console.log("Estou rodando meu JS")
// Carroussel Preço 
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('carousel-container');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    if (!container || !prevBtn || !nextBtn) return;

    const getScrollAmount = () => {
        const firstCard = container.querySelector('.snap-center');
        if (!firstCard) return 340;
        const cardWidth = firstCard.offsetWidth;
        const gap = parseInt(window.getComputedStyle(container).gap) || 24;
        return cardWidth + gap;
    };

    const updateButtonVisibility = () => {
        const scrollLeft = container.scrollLeft;
        const maxScroll = container.scrollWidth - container.clientWidth;
        
        // Esconde a seta esquerda se estiver no início
        if (scrollLeft <= 5) {
            prevBtn.style.setProperty('display', 'none', 'important');
        } else {
            prevBtn.style.display = 'flex';
        }

        // Esconde a seta direita se estiver no final
        if (scrollLeft >= maxScroll - 5) {
            nextBtn.style.setProperty('display', 'none', 'important');
        } else {
            nextBtn.style.display = 'flex';
        }
    };

    nextBtn.addEventListener('click', () => {
        container.scrollBy({
            left: getScrollAmount(),
            behavior: 'smooth'
        });
    });

    prevBtn.addEventListener('click', () => {
        container.scrollBy({
            left: -getScrollAmount(),
            behavior: 'smooth'
        });
    });

    container.addEventListener('scroll', updateButtonVisibility);
    window.addEventListener('resize', updateButtonVisibility);
    
    // Inicializa o estado dos botões
    setTimeout(updateButtonVisibility, 100);
});