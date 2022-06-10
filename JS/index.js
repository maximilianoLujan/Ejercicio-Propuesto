import hamburgerMenu from "./hamburger.js";
import reloj from "./reloj.js"
import teclado from "./eventeclado.js"
import ball from "./gameball.js";
import countdown from "./countdown.js";
import up from "./scrollUp.js";
import goUp from "./goUp.js";
import darkMode from "./dark.js";
import responsiveDesign from "./responsive.js";
import formularioVideo from "./formulario.js";


const d = document;
    d.addEventListener("DOMContentLoaded", e=>{
        //alert("Se inicio una cuenta regresiva para dentro de 10 minutos")
        let fecha = new Date();
        fecha.setMinutes(fecha.getMinutes() + 10,0,0);
        hamburgerMenu(".boton",".elmenu",".elmenu a");
        reloj(".inr",".finr",".hora",".ina",".fina",".audio");
        up(".boton-up");
        goUp(".boton-up");
        //responsiveDesign(".enlace4",".contenedor-youtube",".contenedor-maps");
        formularioVideo("url-sec5","widht-sec5","height-sec5",".button-open",".button-close");
        //countdown(".days",".mi-img",".mi-audio",".hours",".minutes",".seconds",fecha)
    })
    darkMode(".boton-dark","dark-mode","dark-mode2",".boton");
    d.addEventListener("keydown", (e)=>{
        ball(".pelota",".evento",e)
        teclado(e,".pelota");
    })