function componenteContacto(el){
    const componentEl=document.createElement('div');
    componentEl.innerHTML=`
    <section class="seccion-contacto">
        <div class="contenedor-seccion-contacto--palabra-escribime">
            <div class="palabra-escribime">Escribime</div>
        </div>

        <div class="contenedor-formulario">
            <form class="formulario-contacto">
                <div class="contenedor-dos-inputs-media-query">
                    <div class="contenedor-label-y-input-nombre">
                        <label for="input-nombre" class="label-formulario-nombre">Nombre</label>
                        <input type="text" id="input-nombre" class="input-nombre" placeholder="      Tu nombre">
                     </div>    

                    <div class="contenedor-label-y-input-email">
                        <label for="input-email" class="label-formulario-email">Email</label>
                        <input type="text" id="input-email" class="input-email" placeholder="      Tu email">
                    </div> 
                </div>
                <div class="contenedor-label-y-input-mensaje">
                    <label for="input-mensaje" class="label-formulario-mensaje">Mensaje</label>
                    <textarea name="" id="input-mensaje" class="input-mensaje" cols="20" rows="7" placeholder="      Tu mensaje"></textarea>
                </div>  

                <button class="boton-enviar">Enviar</button>
            </form>
        </div>    
    </section>
    `
    el.appendChild(componentEl);
}


