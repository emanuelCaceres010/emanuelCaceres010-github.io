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



function getDataServicios(){
    const dataServicios = fetch("https://cdn.contentful.com/spaces/2dvpig333b21/environments/master/entries?access_token=tTyoacccYAP8EE1JGWF8ZKtoHSQHcHdqM9TSmqAHPSg")
    .then((r) => r.json())
    .then((d) => {return d})
    
    return dataServicios
}

function getDataInicio(){
    const dataInicio = fetch("https://cdn.contentful.com/spaces/2dvpig333b21/environments/master/entries/5h0YI09nHEokFx3wouXixt?access_token=tTyoacccYAP8EE1JGWF8ZKtoHSQHcHdqM9TSmqAHPSg")
    .then((r) => r.json())
    .then((d) => {return d})
    
    return dataInicio
}


function viewDataInicio(d){
    const sectionServiciosPalabraMisEl=document.querySelector(".palabra-mis")
    sectionServiciosPalabraMisEl.textContent=d.fields.palabra1

    const sectionServiciosPalabraServiciosEl=document.querySelector(".palabra-servicios")
    sectionServiciosPalabraServiciosEl.textContent=d.fields.palabra2
}

function viewDataServicios(d) {
    console.log(d)
    const template=document.querySelector("#card-template");
    const container=document.querySelector(".contenedor-cards");
    const templateNav=template.content;
    container.textContent = "";

    const sectionServiciosImagenMaletinEl=document.querySelector(".imagen-maletin")
    sectionServiciosImagenMaletinEl.src=d.includes.Asset[2].fields.file.url

    for (let i = 0; i < d.total; i++) {
        if (d.items[i].fields.titulo !== undefined){
            const titleEl = templateNav.querySelector(".titulo-del-servicio")
            titleEl.textContent = d.items[i].fields.titulo 
        
            const textEl = templateNav.querySelector(".descripcion-del-servicio")
            textEl.textContent = d.items[i].fields.description

            const imgEl = templateNav.querySelector(".imagen-servicio")
            imgEl.src = d.includes.Asset[4].fields.file.url
            

            
            let clone = document.importNode(templateNav, true)
            container.appendChild(clone)
        }
        
            
        

        
        
    };



}


function showDataInicio(){
    const dataInicio=getDataInicio();

    dataInicio.then(r => viewDataInicio(r))
}
showDataInicio();

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