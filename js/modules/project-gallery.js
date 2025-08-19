document.addEventListener('DOMContentLoaded', function() {
  // Initialize image gallery with lightbox functionality
  const galleryItems = document.querySelectorAll('.gallery-item');
  
  if (galleryItems.length > 0) {
    // Create lightbox container
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.style.display = 'none';
    lightbox.style.position = 'fixed';
    lightbox.style.top = '0';
    lightbox.style.left = '0';
    lightbox.style.width = '100%';
    lightbox.style.height = '100%';
    lightbox.style.backgroundColor = 'rgba(0,0,0,0.8)';
    lightbox.style.zIndex = '1000';
    lightbox.style.display = 'flex';
    lightbox.style.alignItems = 'center';
    lightbox.style.justifyContent = 'center';
    lightbox.style.opacity = '0';
    lightbox.style.transition = 'opacity 0.3s';
    
    // Create lightbox image
    const lightboxImg = document.createElement('img');
    lightboxImg.style.maxWidth = '90%';
    lightboxImg.style.maxHeight = '90%';
    lightboxImg.style.objectFit = 'contain';
    
    // Create close button
    const closeBtn = document.createElement('span');
    closeBtn.innerHTML = '&times;';
    closeBtn.style.position = 'absolute';
    closeBtn.style.top = '20px';
    closeBtn.style.right = '20px';
    closeBtn.style.color = '#fff';
    closeBtn.style.fontSize = '30px';
    closeBtn.style.cursor = 'pointer';
    
    lightbox.appendChild(lightboxImg);
    lightbox.appendChild(closeBtn);
    document.body.appendChild(lightbox);
    
    // Add click events to gallery items
    galleryItems.forEach(item => {
      item.addEventListener('click', function(e) {
        const imgSrc = this.querySelector('img').src;
        lightboxImg.src = imgSrc;
        lightbox.style.opacity = '1';
        document.body.style.overflow = 'hidden';
      });
    });
    
    // Close lightbox
    closeBtn.addEventListener('click', function() {
      lightbox.style.opacity = '0';
      setTimeout(() => {
        lightbox.style.display = 'none';
      }, 300);
      document.body.style.overflow = 'auto';
    });
    
    lightbox.addEventListener('click', function(e) {
      if (e.target !== lightboxImg) {
        lightbox.style.opacity = '0';
        setTimeout(() => {
          lightbox.style.display = 'none';
        }, 300);
        document.body.style.overflow = 'auto';
      }
    });
  }
});
