# DARact2_laravel-Deployment

> **Universidad Internacional de La Rioja en México (UNIR)**  
> **Licenciatura en Ingeniería en Sistemas Computacionales**  
> **Asignatura:** Desarrollo de Aplicaciones en Red (DAR)  
> **Actividad:** Actividad 2 — Tutorial de una Tecnología / Framework  
> **Grupo:** Grupo C  

---

## 📌 Descripción del Proyecto

Portal web técnico y laboratorio práctico desarrollado para documentar el **aprovisionamiento, resolución de dependencias y despliegue del framework Laravel 11** en dos entornos de ejecución independientes: **Windows 11** y **Linux (Pop!_OS / Ubuntu)**.

El sitio fue concebido bajo arquitectura modular desacoplada (*Component-Based Architecture*) con estética institucional basada en la identidad visual de **UNIR** (`#0198cc` y `#1967b7`), diseño de alto contraste con tarjetas blancas sobre fondo claro suave, reproductores nativos de vídeo HTML5 y un visor interactivo de pantalla completa (**Lightbox**) para inspeccionar capturas de consola y código en alta resolución.

---

## 👥 Integrantes del Equipo (Grupo C)

* **Jorge Rick** (`@jorgerickdev`) — *Despliegue de infraestructura, maquetación y desarrollo*
* **Jperaltaa**
* **Vic**
* **Borbolla**

---

## 📂 Arquitectura del Repositorio

La jerarquía de archivos y directorios del proyecto se organiza de forma homogénea y modular:

```text
DARact2_laravel-Deployment/
├── README.md                            # Documentación general del repositorio
├── index.html                           # Dashboard principal, métricas y arquitectura MVC
└── assets/
    ├── styles.css                       # Hoja de estilos globales (Tema UNIR, Navbar, Cards)
    ├── code.js                          # Lógica global compartida y visor interactivo Lightbox
    │
    ├── imagenes/                        # Recursos gráficos institucionales y logotipos
    │   ├── logo_laravel.png             # Isotipo oficial de Laravel 11
    │   ├── modelo.png                   # Diagrama del patrón Modelo-Vista-Controlador
    │   ├── windows.png                  # Logotipo oficial de Windows 11
    │   └── ubuntu.png                   # Logotipo de Ubuntu Linux Server
    │
    ├── windows/                         # Módulo técnico: Windows 11
    │   ├── windows.html                 # Guía paso a paso en Windows 11
    │   ├── styles.css                   # Acentos específicos en Azul Windows (#0078d4)
    │   ├── code.js                      # Lógica local y visor para capturas de Windows
    │   ├── videos/
    │   │   └── video_windows.mp4        # Grabación de la sesión de instalación
    │   └── imagenes/                    # Evidencias en capturas (IMG01 a IMG18)
    │
    └── linux/                           # Módulo técnico: Linux VM (Pop!_OS / Ubuntu)
        ├── linux.html                   # Guía paso a paso en Linux por terminal
        ├── styles.css                   # Acentos específicos en Naranja Ubuntu (#e95420)
        ├── code.js                      # Lógica local y visor para capturas de Linux
        ├── videos/
        │   └── video_linux.mp4          # Grabación de la sesión de instalación
        └── imagenes/                    # Evidencias en capturas (IMG01 a IMG14)
```

---

## ⚙️ Comparativa de Aprovisionamiento Técnico

| Criterio Técnico | Entorno Windows 11 | Entorno Linux (Pop!_OS / Ubuntu) |
| :--- | :--- | :--- |
| **Librerías Base** | Visual C++ Redistributable (`vc_redist.x64.exe`) | Librerías estándar de C (`libc6`, `build-essential`) |
| **Runtime PHP** | PHP 8.5.11 NTS descomprimido en `C:\PHP` | PHP 8.5.4 instalado vía gestor nativo `apt` |
| **Gestor de Paquetes** | Composer 2.10.03 (Instalador oficial) | Composer 2.9.5 (Paquete oficial de distribución) |
| **Módulos Críticos** | Edición manual en `C:\PHP\php.ini` (`zip`, `fileinfo`) | Activación automática de módulos (`php-curl`, `php-zip`) |
| **Variables de Entorno**| Registro en interfaz gráfica de Windows (`PATH`) | Inyección en archivo de shell (`~/.zshrc` / `~/.bashrc`) |
| **Servidor Local** | Artisan CLI en `http://127.0.0.1:8000` | Artisan CLI en `http://127.0.0.1:8000` |

---

## 🚀 Resumen de Instalación por Plataforma

### 🪟 1. Procedimiento en Windows 11

1. **Entorno VS Code:** Instalación de extensiones (*PHP Extension Pack*, *Laravel Blade Snippets*, *Laravel Extra Intellisense*, *GitLens*).
2. **Runtime PHP:** Instalación de `vc_redist.x64.exe`, descarga del ZIP NTS desde `php.net`, extracción en `C:\PHP` y alta de la ruta en la variable de entorno `PATH`.
3. **Composer y php.ini:** Ejecución de `Composer-Setup.exe` y habilitación obligatoria de `extension=fileinfo` y `extension=zip` en `C:\PHP\php.ini`.
4. **Instalador de Laravel:**
   ```powershell
   composer global require laravel/installer
   laravel --version  # Laravel Installer 5.32.0
   ```
5. **Servidor y Verificación:**
   ```powershell
   laravel new demo-laravel
   cd demo_laravel
   php artisan serve
   ```
   Comprobación en navegador en `http://127.0.0.1:8000`.

---

### 🐧 2. Procedimiento en Linux (Pop!_OS / Ubuntu)

1. **Actualización e Instalación de PHP:**
   ```bash
   sudo apt update && sudo apt upgrade -y
   sudo apt install php curl php-cli php-mbstring php-xml php-curl php-zip unzip -y
   php -v  # PHP 8.5.4
   ```
2. **Instalación de Composer:**
   ```bash
   sudo apt install composer -y
   composer -v  # Composer 2.9.5
   ```
3. **Laravel CLI y PATH:**
   ```bash
   composer global require laravel/installer
   echo 'export PATH="$HOME/.config/composer/vendor/bin:$PATH"' >> ~/.zshrc
   source ~/.zshrc
   laravel --version  # Laravel Installer 5.32.0
   ```
4. **Servidor y Verificación:**
   ```bash
   laravel new demo-laravel
   cd demo-laravel
   php artisan serve
   ```
   Comprobación activa en Mozilla Firefox en `http://127.0.0.1:8000`.

---

## 📹 Evidencias Multimedia y Respaldo en la Nube

Para facilitar la revisión docente sin depender exclusivamente del almacenamiento local de vídeos, se dispone de acceso en streaming a través de Microsoft OneDrive:

* 🪟 **Grabación Windows 11 VM:** [Abrir Video en OneDrive](https://1drv.ms/v/c/1629febfca0615c7/IQD_9xCnSpC1QKDGbCEuM_AGAVuC8HP5V4nHtR4eR0awDV8?e=lPEuOG)
* 🐧 **Grabación Linux VM:** [Abrir Video en OneDrive](https://1drv.ms/v/c/1629febfca0615c7/IQBocGk3lsr3TrAUPbBGqmQiAcSrPMvQA1ScSOWaI3eCQW4?e=WlhK1Z)

---

## 💻 Ejecución Local del Portal

Para explorar el portal web en tu máquina local:

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/jorgerickdev/DARact2_laravel-Deployment.git
   cd DARact2_laravel-Deployment
   ```
2. **Abrir en el navegador:**
   * Abre `index.html` en cualquier navegador web moderno (Google Chrome, Mozilla Firefox, Microsoft Edge).
   * No requiere servidores Apache ni Nginx; opera como un sitio estático desacoplado listo para navegación local o despliegue en GitHub Pages.

---

## 📜 Licencia y Uso Académico

Proyecto desarrollado exclusivamente con propósitos formativos y de evaluación académica para la **Universidad Internacional de La Rioja (UNIR México)** dentro del programa de **Ingeniería en Sistemas Computacionales**, Octubre de 2026.