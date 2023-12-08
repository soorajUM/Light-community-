document.addEventListener('DOMContentLoaded', function () {
  const images = document.querySelectorAll('.blinking-container img');
  let currentIndex = 0;

  function toggleImages() {
    images.forEach(img => img.style.display = 'none');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].style.display = 'block';
  }

  setInterval(toggleImages, 500);
});









    