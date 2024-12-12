document.querySelectorAll('.image-container img').forEach(img => {
  img.onerror = () => {
    img.parentElement.classList.add('fallback');
    img.remove(); // Optionally remove the broken <img> tag
  };
});
