// JavaScript to toggle the menu visibility
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});
document.querySelectorAll('.carousel').forEach((carousel) => {
    const carouselImages = carousel.querySelector('.carousel-images');
    const prevButton = carousel.querySelector('.carousel-btn.prev');
    const nextButton = carousel.querySelector('.carousel-btn.next');
    const dotsContainer = carousel.querySelector('.carousel-dots');
  
    let currentIndex = 0;
  
    // Generate dots
    const imagesCount = carouselImages.children.length;
    for (let i = 0; i < imagesCount; i++) {
      const dot = document.createElement('button');
      if (i === 0) dot.classList.add('active');
      dotsContainer.appendChild(dot);
    }
  
    const dots = Array.from(dotsContainer.children);
  
    function updateCarousel() {
      const width = carouselImages.children[0].clientWidth;
      carouselImages.style.transform = `translateX(-${currentIndex * width}px)`;
  
      // Update dots
      dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
      });
    }
  
    // Add event listeners to navigation buttons
    prevButton.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + imagesCount) % imagesCount;
      updateCarousel();
    });
  
    nextButton.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % imagesCount;
      updateCarousel();
    });
  
    // Add event listeners to dots
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        currentIndex = index;
        updateCarousel();
      });
    });
  
    // Ensure the carousel resizes correctly on window resize
    window.addEventListener('resize', updateCarousel);
  });
