import hamburgerMenu from "./hamburger.js";
import reloj from "./reloj.js"
import teclado from "./eventeclado.js"
import ball from "./gameball.js";
import countdown from "./countdown.js";
const d = document;
    d.addEventListener("DOMContentLoaded", e=>{
        hamburgerMenu(".boton",".elmenu",".elmenu a");
        reloj(".inr",".finr",".hora",".ina",".fina",".audio");
        countdown(".mi-img",".mi-audio",".hours",".minutes",".seconds")
    })
    d.addEventListener("keydown", (e)=>{
        ball(".pelota",".evento",e)
        teclado(e,".pelota");
    })