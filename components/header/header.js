function componenteHeader(el){
    const componentEl=document.createElement('div');
    componentEl.innerHTML=`
    <header class="header">    
        <div class="contenedor-logo">
            <a href="../../index.html" class="link-home">
                <img src="./media/imgs/icons8-logotipo-vmware-antiguo-48.png" alt="">
            </a>
            
        </div>
        <button class="abre-ventana"></button>
        <div class="contenedor-links-header">
            <a href="portfolio.html" class="contenedor-porfolio-header">Portfolio</a>
            <a href="servicios.html" class="contenendor-servicios-header">Servicios</a>
            <a href="contacto.html" class="contenendor-contacto-header">Contacto</a>
        </div>
    </header>
    `
    el.appendChild(componentEl);
}