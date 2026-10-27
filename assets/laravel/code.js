/**
 * Módulo de Lógica e Interactividad - Laravel & Docker
 * UNIR México · DAR Grupo C (Ricardo Trujillo / jorgerickdev)
 */

document.addEventListener('DOMContentLoaded', () => {
  initLightbox();
  initCopyCodeButtons();
  initSmoothScroll();
  console.log("🚀 Módulo Laravel & Docker inicializado exitosamente | UNIR - DAR Grupo C");
});

/* ==========================================================================
   Visor de Imágenes en Alta Resolución (Lightbox)
   ========================================================================== */
function initLightbox() {
  const overlay = document.getElementById('lightboxOverlay');
  const imgTarget = document.getElementById('lightboxImg');
  const captionTarget = document.getElementById('lightboxCaption');
  const wrappers = document.querySelectorAll('.img-wrapper');

  if (!overlay || !imgTarget || !captionTarget) return;

  wrappers.forEach(wrapper => {
    wrapper.addEventListener('click', () => {
      const img = wrapper.querySelector('img');
      const caption = wrapper.querySelector('.img-caption');

      if (img) {
        imgTarget.src = img.src;
        imgTarget.alt = img.alt || "Captura del procedimiento";
        captionTarget.textContent = caption ? caption.textContent : (img.alt || "");
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Evitar scroll de fondo
      }
    });
  });

  // Cerrar al presionar la tecla Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('active')) {
      forzarCerrarLightbox();
    }
  });
}

function cerrarLightbox(event) {
  const overlay = document.getElementById('lightboxOverlay');
  // Solo cerrar si el clic fue en el fondo oscuro y no dentro de la imagen
  if (event.target === overlay) {
    forzarCerrarLightbox();
  }
}

function forzarCerrarLightbox() {
  const overlay = document.getElementById('lightboxOverlay');
  if (overlay) {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Hacer las funciones accesibles globalmente desde HTML onclick
window.cerrarLightbox = cerrarLightbox;
window.forzarCerrarLightbox = forzarCerrarLightbox;

/* ==========================================================================
   Botón Copiar al Portapapeles para Bloques de Código
   ========================================================================== */
function initCopyCodeButtons() {
  const codeBlocks = document.querySelectorAll('pre');

  codeBlocks.forEach(pre => {
    // Evitar añadir botón doble o en bloques específicos como tree
    if (pre.classList.contains('tree-code') || pre.querySelector('.btn-copy-code')) return;

    pre.style.position = 'relative';

    const copyBtn = document.createElement('button');
    copyBtn.className = 'btn-copy-code';
    copyBtn.innerHTML = '📋 Copiar';
    copyBtn.title = 'Copiar comandos al portapapeles';

    copyBtn.style.position = 'absolute';
    copyBtn.style.top = '8px';
    copyBtn.style.right = '8px';
    copyBtn.style.background = 'rgba(12, 35, 64, 0.85)';
    copyBtn.style.color = '#38bdf8';
    copyBtn.style.border = '1px solid rgba(1, 152, 204, 0.4)';
    copyBtn.style.borderRadius = '6px';
    copyBtn.style.padding = '0.3rem 0.65rem';
    copyBtn.style.fontSize = '0.75rem';
    copyBtn.style.fontWeight = '700';
    copyBtn.style.cursor = 'pointer';
    copyBtn.style.transition = 'all 0.2s ease';

    copyBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const codeElement = pre.querySelector('code');
      const textToCopy = codeElement ? codeElement.innerText : pre.innerText;

      navigator.clipboard.writeText(textToCopy).then(() => {
        copyBtn.innerHTML = '✅ ¡Copiado!';
        copyBtn.style.background = '#15803d';
        copyBtn.style.color = '#ffffff';

        setTimeout(() => {
          copyBtn.innerHTML = '📋 Copiar';
          copyBtn.style.background = 'rgba(12, 35, 64, 0.85)';
          copyBtn.style.color = '#38bdf8';
        }, 2000);
      }).catch(err => {
        console.error('Error al copiar texto: ', err);
      });
    });

    copyBtn.addEventListener('mouseenter', () => {
      copyBtn.style.background = '#0198cc';
      copyBtn.style.color = '#ffffff';
    });

    copyBtn.addEventListener('mouseleave', () => {
      if (copyBtn.innerHTML === '📋 Copiar') {
        copyBtn.style.background = 'rgba(12, 35, 64, 0.85)';
        copyBtn.style.color = '#38bdf8';
      }
    });

    pre.appendChild(copyBtn);
  });
}

/* ==========================================================================
   Desplazamiento Suave (Smooth Scroll)
   ========================================================================== */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
}
