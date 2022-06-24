const d = document
export default function verinformacion(){
    const $informacion = d.querySelector(".contenedor-info"),
        $enlace = $informacion.querySelector("a"),
        $parrafos = $informacion.querySelectorAll("p"),
        $boton = d.querySelector(".boton-info");
    let visible = false;
    d.addEventListener("click", e =>{
        if (e.target.matches(".boton-info")){
            if (visible === false){
                $informacion.classList.add("verinfo");
                $enlace.classList.add("verap");
                $parrafos.forEach(el =>{
                    el.classList.add("verap");
                })
                $boton.textContent = "Cerrar"
                visible = true;
            } else{
                $informacion.classList.remove("verinfo");
                $enlace.classList.remove("verap");
                $parrafos.forEach(el =>{
                    el.classList.remove("verap");
                })
                $boton.textContent = "¿De que se trata esto?"
                visible = false;
            }
        }
    })
    d.addEventListener("scroll", e=>{
        if (visible === true){
            $informacion.classList.remove("verinfo");
            $enlace.classList.remove("verap");
            $parrafos.forEach(el =>{
                el.classList.remove("verap");
            })
            $boton.textContent = "¿De que se trata esto?"
            visible = false;
        }
    })
}