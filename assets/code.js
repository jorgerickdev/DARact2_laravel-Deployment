/**
 * Lógica Compartida - Portal Laravel 11 Multiplataforma
 * Universidad Internacional de La Rioja en México (UNIR)
 * Asignatura: Desarrollo de Aplicaciones en Red (DAR) - Grupo C
 */
document.addEventListener('DOMContentLoaded', () => {
  console.log('UNIR México | Portal Laravel 11 - Grupo C inicializado.');

  // Manejador preventivo si las imágenes locales aún no están creadas en disco
  const monitoredImages = document.querySelectorAll('img');
  monitoredImages.forEach(img => {
    img.addEventListener('error', function() {
      this.style.border = '1px dashed #0198cc';
      this.style.padding = '1.5rem';
      this.style.background = '#0d1424';
      this.style.color = '#94a3b8';
      this.alt = 'Imagen pendiente de ubicar: ' + this.getAttribute('src');
    });
  });

  // Pausar cualquier vídeo si la pestaña o ventana pierde el foco
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      document.querySelectorAll('video').forEach(video => {
        video.pause();
      });
    }
  });
});