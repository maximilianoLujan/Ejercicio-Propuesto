import hamburgerMenu from "./hamburger.js";
import reloj from "./reloj.js"
import teclado from "./eventeclado.js"
import ball from "./gameball.js";
import countdown from "./countdown.js";
import up from "./scrollUp.js";
import goUp from "./goUp.js";
import darkMode from "./dark.js";


const d = document;
    d.addEventListener("DOMContentLoaded", e=>{
        //alert("Se inicio una cuenta regresiva para dentro de 10 minutos")
        let fecha = new Date();
        fecha.setMinutes(fecha.getMinutes() + 10,0,0);
        hamburgerMenu(".boton",".elmenu",".elmenu a");
        reloj(".inr",".finr",".hora",".ina",".fina",".audio");
        up(".boton-up");
        goUp(".boton-up");
        darkMode(".boton-dark","dark-mode","dark-mode2");
        //countdown(".days",".mi-img",".mi-audio",".hours",".minutes",".seconds",fecha)
    })
    d.addEventListener("keydown", (e)=>{
        ball(".pelota",".evento",e)
        teclado(e,".pelota");
    })