/**
 * Lógica del Módulo Linux VM
 * Portal Técnico de Laravel 11 - UNIR México (DAR - Grupo C)
 */
document.addEventListener('DOMContentLoaded', () => {
  console.log('UNIR | Módulo Linux VM inicializado correctamente.');

  // Control de reproducción de video: pausar si la pestaña se oculta
  const videoElement = document.querySelector('video');
  document.addEventListener('visibilitychange', () => {
    if (document.hidden && videoElement) {
      videoElement.pause();
    }
  });

  // Manejo de error suave si una imagen no se encuentra en el directorio
  const images = document.querySelectorAll('.img-wrapper img');
  images.forEach(img => {
    img.addEventListener('error', function() {
      this.style.opacity = '0.6';
      this.style.filter = 'grayscale(100%)';
      const caption = this.parentElement.querySelector('.img-caption');
      if (caption) {
        caption.innerHTML += ' <br><small style="color: #ef4444;">(Verificar ruta del archivo)</small>';
      }
    });
  });

  // Inicializar Visor Interactivo (Lightbox)
  initLightbox();
});

/**
 * Visor Interactivo Lightbox
 * Permite hacer clic en cualquier captura para verla en pantalla completa nítida
 */
function initLightbox() {
  let overlay = document.querySelector('.lightbox-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.className = 'lightbox-overlay';
    overlay.innerHTML = `
      <div class="lightbox-wrapper">
        <button class="lightbox-close-btn" title="Cerrar (Esc)">&times;</button>
        <img class="lightbox-img" src="" alt="Captura ampliada">
        <div class="lightbox-caption"></div>
        <span class="lightbox-hint">Presiona Esc o haz clic fuera para cerrar</span>
      </div>
    `;
    document.body.appendChild(overlay);

    const closeBtn = overlay.querySelector('.lightbox-close-btn');
    const close = () => {
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    };

    closeBtn.addEventListener('click', close);
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) close();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && overlay.classList.contains('active')) {
        close();
      }
    });
  }

  const targetImages = document.querySelectorAll('.img-wrapper img');
  targetImages.forEach(img => {
    img.addEventListener('click', () => {
      const lbImg = overlay.querySelector('.lightbox-img');
      const lbCap = overlay.querySelector('.lightbox-caption');
      lbImg.src = img.src;
      lbImg.alt = img.alt || 'Captura ampliada';

      const captionEl = img.closest('.img-wrapper')?.querySelector('.img-caption');
      const captionText = captionEl ? captionEl.innerText : (img.alt || '');
      lbCap.innerText = captionText;
      lbCap.style.display = captionText ? 'block' : 'none';

      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });
}