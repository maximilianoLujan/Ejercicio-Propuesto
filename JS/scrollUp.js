const d = document;
export default function up(boton){
    const $boton = d.querySelector(boton);
    let active = false
    d.addEventListener("scroll",e=>{
        if ((scrollY > 110)&&(active === false) ){
            active = true
            $boton.className += " up-visible" ;
        }
        if ((scrollY < 110)&&(active === true) ){
            active = false
            $boton.classList.remove("up-visible") ;
        }
    })
}