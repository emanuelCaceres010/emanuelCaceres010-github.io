

function main(){
    const containerHeaderComponent=document.querySelector(".contenedor-header");
    componenteHeader(containerHeaderComponent)

    const containerMenuMobileComponent=document.querySelector("body");
    componenteMenu(containerMenuMobileComponent)

    const containerContacto=document.querySelector(".contenedor-contacto")
    componenteContacto(containerContacto)

    const containerFooterComponent=document.querySelector(".contenedor-footer")
    componenteFooter(containerFooterComponent)
}
main()

function menuButton(){
    const botonAbreVentanaEl=document.querySelector(".abre-ventana");
    const menuMobileEl=document.getElementById("menu-mobile");
    const botonCierraVentanaEl=document.querySelector(".cierra-ventana");

    botonAbreVentanaEl.addEventListener("click",()=>{
       menuMobileEl.style.display= "inherit";
    })
    botonCierraVentanaEl.addEventListener("click",()=>{
        menuMobileEl.style.display= "none";
    })
}
menuButton();



function getDataPresentacion() {
    const dataSectionPresentacion = fetch("https://cdn.contentful.com/spaces/2dvpig333b21/environments/master/entries/6iC0vuzPWGVRnBStAF9PXs?access_token=tTyoacccYAP8EE1JGWF8ZKtoHSQHcHdqM9TSmqAHPSg")
    .then((r) => r.json())
    .then((d) => {return d})
    
    return dataSectionPresentacion
}

function getAssets(){
    const dataAssets = fetch("https://cdn.contentful.com/spaces/2dvpig333b21/environments/master/assets?access_token=tTyoacccYAP8EE1JGWF8ZKtoHSQHcHdqM9TSmqAHPSg")
    .then((r) => r.json())
    .then((d) => {return d})
    
    return dataAssets
}

function getDataBienvenida(){
    const dataBienvenida = fetch("https://cdn.contentful.com/spaces/2dvpig333b21/environments/master/entries/7GA4xbfJh6MEaYigun0IF?access_token=tTyoacccYAP8EE1JGWF8ZKtoHSQHcHdqM9TSmqAHPSg")
    .then((r) => r.json())
    .then((d) => {return d})
    
    return dataBienvenida
}

function getDataServicios(){
    const dataServicios = fetch("https://cdn.contentful.com/spaces/2dvpig333b21/environments/master/entries?access_token=tTyoacccYAP8EE1JGWF8ZKtoHSQHcHdqM9TSmqAHPSg")
    .then((r) => r.json())
    .then((d) => {return d})
    
    return dataServicios
}




function viewDataBienvenida(d){
    const sectionBienvenidaPalabra1El=document.querySelector(".bienvenida-hola")
    const sectionBienvenidaPalabra2El=document.querySelector(".bienvenida-soy-ema")

    sectionBienvenidaPalabra1El.textContent=d.fields.textoBienvenida
    sectionBienvenidaPalabra2El.textContent=d.fields.textoBienvenida2
}

function viewDataPresentacion(d){
    const sectionPresentacionSaludoEl=document.querySelector(".soy-ema-texto")
    const sectionPresentacionTextoEl=document.querySelector(".texto-presentacion")

    sectionPresentacionSaludoEl.textContent=d.fields.saludoPresentacion
    sectionPresentacionTextoEl.textContent=d.fields.textoPresentacion

}

function viewAssets(d){
    const sectionBienvenidaImagenCoheteEl=document.querySelector(".img-cohete")
    sectionBienvenidaImagenCoheteEl.src=d.items[5].fields.file.url

    const sectionPresentacionImagenEl=document.querySelector(".img-presentacion")
    sectionPresentacionImagenEl.src=d.items[4].fields.file.url
    
}

function viewDataServicios(d) {
    const template=document.querySelector("#card-template");
    const container=document.querySelector(".contenedor-cards");
    const templateNav=template.content;
    container.textContent = "";
    const arregloCards=document.querySelector(".contenedor-elementos-de-la-card")

    for (let i = 0; i < d.total; i++) {
        if (d.items[i].fields.tituloTemplate !== undefined){
            const titleEl = templateNav.querySelector(".titulo-del-servicio")
            titleEl.textContent = d.items[i].fields.tituloTemplate  
        
            const textEl = templateNav.querySelector(".descripcion-del-servicio")
            textEl.textContent = d.items[i].fields.descripcionTemplate

            for (let j = 0; j < d.includes.Asset.length; j++) {
                if (d.items[i].fields.imagenTemplate.sys.id  === d.includes.Asset[j].sys.id) {
                    const imgEl = templateNav.querySelector(".imagen-servicio")
                    imgEl.src = d.includes.Asset[j].fields.file.url
                }
            }

            
            let clone = document.importNode(templateNav, true)
            container.appendChild(clone)
        }
        
            
        

        
        
    };



}




function showDataBienvenida(){
    const dataBienvenida=getDataBienvenida();

    dataBienvenida.then(r => viewDataBienvenida(r))
}
showDataBienvenida();

function showDataPresentacion(){
    const dataPresentacion=getDataPresentacion();
 
    dataPresentacion.then(r => viewDataPresentacion(r))
}
showDataPresentacion();

function showAssets(){
    const dataAssets=getAssets();

    dataAssets.then(r => viewAssets(r))
}
showAssets();


function showDataServicios(){
    const dataServicios=getDataServicios();

    dataServicios.then(r => viewDataServicios(r))
}
showDataServicios();

function enviarForm() {
    const formEl = document.querySelector(".formulario-contacto");
    formEl.addEventListener("submit", async (f) => {
      f.preventDefault();
  
      let nombre = f.target.querySelector("#input-nombre").value;
      let email = f.target.querySelector("#input-email").value;
      let message = f.target.querySelector("#input-mensaje").value;
  
      const datos = {
        to: "emanuelcaceres010@gmail.com",
        message: `Nombre: ${nombre}, <br> Email: ${email}, <br> Mensaje: ${message}`,
      };
      await fetch("https://apx-api.vercel.app/api/utils/dwf", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(datos),
      });
      formEl.reset();
    });
}
enviarForm();

