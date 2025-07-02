document.addEventListener('DOMContentLoaded', () => {
    // MENU ACTIVE & HIGHLIGHT EFFECT
    const menuItems = document.querySelectorAll('.menu li');
  
    menuItems.forEach(item => {
      item.addEventListener('click', () => {
        menuItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
  
        const icon = item.querySelector('i');
        icon.style.transform = 'scale(1.2)';
        setTimeout(() => {
          icon.style.transform = 'scale(1)';
        }, 200);
      });
  
      item.addEventListener('mouseenter', (e) => {
        const highlight = document.createElement('div');
        highlight.classList.add('highlight');
        highlight.style.position = 'absolute';
        highlight.style.top = '0';
        highlight.style.left = '0';
        highlight.style.width = '100%';
        highlight.style.height = '100%';
        highlight.style.borderRadius = '16px';
        highlight.style.background = `radial-gradient(circle at ${e.offsetX}px ${e.offsetY}px, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 70%)`;
        highlight.style.pointerEvents = 'none';
  
        item.appendChild(highlight);
  
        setTimeout(() => {
          highlight.style.opacity = '0';
          setTimeout(() => {
            item.removeChild(highlight);
          }, 300);
        }, 500);
      });
    });
  
    // CARD 3D HOVER EFFECT
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
  
        const rotateY = (x / rect.width - 0.5) * 10;
        const rotateX = (y / rect.height - 0.5) * -10;
  
        
      });
  
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
        card.style.transition = 'transform 0.5s ease';
      });
    });
  
    // CAROUSEL BUTTONS FUNCTIONALITY
    const track = document.querySelector('.carousel-track');
    const btnLeft = document.querySelector('.carousel-btn.left');
    const btnRight = document.querySelector('.carousel-btn.right');
    const cardsArray = Array.from(track.children);
  
    // card width + gap (gap is 24px)
    const cardWidth = cardsArray[0].getBoundingClientRect().width + 24;
  
    let currentPosition = 0;
    // Show 2 cards at a time, so max scroll is total cards - 2 visible cards
    const maxPosition = -cardWidth * (cardsArray.length - 2);
  
    btnRight.addEventListener('click', () => {
      if (currentPosition > maxPosition) {
        currentPosition -= cardWidth;
        track.style.transform = `translateX(${currentPosition}px)`;
      }
    });
  
    btnLeft.addEventListener('click', () => {
      if (currentPosition < 0) {
        currentPosition += cardWidth;
        track.style.transform = `translateX(${currentPosition}px)`;
      }
    });
  });
  