1.- ACTUALIZACION DEL SISTEMA Y REPOSITORIOS 
actualizacion de repositorios img01\_linux.png sudo apt update &amp;&amp; sudo apt upgrade -y sistema actualizado 

2.- INSTALACION Y VERIFICACION DE PHP 
instalacion de php y herramientas img02\_linux.png sudo apt install php curl ... -y 
verificacion version de php img03\_linux.png php -v version 8.5.4

 3.- INSTALACION DE COMPOSER
  instalacion de composer con apt img04\_linux.png sudo apt install composer -y 
  verificacion version de composer img05\_linux.png composer -v / composer --version version 2.9.5
 
  4.- INSTALACION DE LARAVEL Y CONFIGURACION DE RUTA 
  instalacion global del instalador img06\_linux.png composer global require laravel/installer 
  configuracion de ruta en PATH img07\_linux.png export PATH en \~/.zshrc (o \~/.bashrc) 
  recarga de variables de terminal img08\_linux.png source \~/.zshrc
   verificacion de version de laravel img09\_linux.png laravel --version version 5.32.0 
  
  5.- PRUEBA DE FUNCIONAMIENTO CON DEMO 
  creacion del demo de laravel img10\_linux.png laravel new demo-laravel
   cambio de directorio img11\_linux.png cd demo-laravel 
   activacion del servidor de desarrollo img12\_linux.png php artisan serve http://127.0.0.1:8000
    verificacion en navegador firefox img13\_linux.png http://127.0.0.1:8000 
    pantalla de bienvenida activa detencion del servicio en terminal img14\_linux.png Ctrl + C cierre de sesion