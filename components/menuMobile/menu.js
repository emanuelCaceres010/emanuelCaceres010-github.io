function componenteMenu(el){
    const componentEl=document.createElement('div');
    componentEl.innerHTML=`
    <div class="menu" id="menu-mobile">
        <div class="contenedor-boton-cerrar-ventana">
            <button class="cierra-ventana"></button>
        </div>
        <div class="ventana__contenido">
            <a href="portfolio.html" class="contenedor-porfolio">Portfolio</a>
            <a href="servicios.html" class="contenedor-servicios">Servicios</a>
            <a href="contacto.html" class="contenendor-contacto">Contacto</a>
        </div>
    </div>
    `
    el.appendChild(componentEl);
}
