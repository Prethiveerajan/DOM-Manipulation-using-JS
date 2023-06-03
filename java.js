document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.carousel');
    const colorPicker = document.getElementById('colorPicker');
  
    colorPicker.addEventListener('change', function() {
      const selectedColor = colorPicker.value;
      slides.forEach(function(slide) {
        slide.style.backgroundColor = selectedColor;
      });
    });
  });
  