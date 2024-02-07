function main(){
    const containerHeaderComponent=document.querySelector(".contenedor-header");
    componenteHeader(containerHeaderComponent)

    const containerMenuMobileComponent=document.querySelector("body");
    componenteMenu(containerMenuMobileComponent)

    const containerComponenteContacto=document.querySelector(".contenedor-contacto");
    componenteContacto(containerComponenteContacto)

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