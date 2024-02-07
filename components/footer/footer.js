function componenteFooter(el){
    const componentEl=document.createElement('div');
    componentEl.innerHTML=`
    <footer class="componente-footer">
        <div class="contenedor-logo-footer">
            <img class="logo-footer" src="./media/imgs/icons8-logotipo-vmware-antiguo-48.png" alt="">
        </div>
        <div class="contenedor-logos-y-palabras-footer">
            <div class="contenedor-home-footer">
                <label for="word-home" class="home-logo">
                    <img src="./media/imgs/home.png" alt="">
                </label>
                <a href="index.html" class="word-home">Home</a>
            </div>
       
            <div class="contenedor-servicios-footer">
                <label for="word-servicios" class="servicios-logo-footer">
                    <img src="./media/imgs/user.png" alt="">
                </label>
                <a href="servicios.html" class="word-servicios">Servicios</a>
            </div>

            <div class="contenedor-contacto-footer">
                <label for="word-contacto" class="contacto-logo-footer">
                    <img src="./media/imgs/phone.png" alt="">
                </label>
                <a href="contacto.html" class="word-contacto">Contacto</a>
            </div>
        </div>    

        <div class="contenedor-del-contenedor-logos-footer">
            <div class="contenedor-logos-footer">
                <img src="./media/imgs/Frame 24.png" alt="">
                <img src="./media/imgs/Frame 26.png" alt="">
                <img src="./media/imgs/Frame 27.png" alt="">
            </div>
        </div>

        <div class="contenedor-link-final-footer">
            <img src="./media/imgs/apx.school.png" alt="">
        </div>
    </footer>
    `
    el.appendChild(componentEl);
}
