const n = navigator,
    d = document,
    w = window;
let conectado = true;
export default function conexion(div){
    const $divconexion = d.querySelector(div),
        mensajeonline = `<h2>Vuelves a tener conexion a internet</h2>`,
        mensajeoffline = `<h2>No tienes conexion a internet</h2>`;

    w.addEventListener("online",e =>{
        $divconexion.style.backgroundColor = "green";
        $divconexion.innerHTML = mensajeonline;
        $divconexion.classList.add("conexion-active");
        setTimeout(() => {
            $divconexion.classList.remove("conexion-active");
        }, 4000);
    })
    w.addEventListener("offline",e=>{
        $divconexion.style.backgroundColor = "red";
        $divconexion.innerHTML = mensajeoffline;
        $divconexion.classList.add("conexion-active");
        setTimeout(() => {
            $divconexion.classList.remove("conexion-active");
        }, 4000);
    })
}