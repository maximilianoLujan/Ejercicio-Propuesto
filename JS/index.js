import hamburgerMenu from "./hamburger.js";
import reloj from "./reloj.js";

const d = document;
d.addEventListener("DOMContentLoaded", e=>{
    hamburgerMenu(".boton",".elmenu",".elmenu a");
    reloj(".inr",".finr",".hora",".ina",".fina",".audio");
})