const d = document,
    ls = localStorage;
export default function darkMode(botondark,darkmode,darkmode2,menuburger,boton2){
   const $botondark = d.querySelector(botondark),
    $darkmode = d.querySelectorAll(`[${darkmode}]`),
    $darkmode2 = d.querySelectorAll(`[${darkmode2}]`),
    $botonburger = d.querySelector(menuburger),
    $botontop = d.querySelector(boton2);
    let control = false;

const darkMode = ()=>{
    $darkmode2.forEach(el=>{
        el.classList.add("darkh");
    })
    $darkmode.forEach(el=>{
        el.classList.add("dark");
        $botondark.style.backgroundImage = "url(../Icons/daylight.png)"
    })
    $botonburger.style.backgroundColor ="rgb(16, 16, 112)";
    control = true;
    ls.setItem("mode","dark");
}
const lightMode = ()=>{
    $darkmode2.forEach(el=>{
        el.classList.remove("darkh");
    })
    $darkmode.forEach(el=>{
        el.classList.remove("dark");
        $botondark.style.backgroundImage = "url(../Icons/night-mode.png)"
    })
    
    $botonburger.style.backgroundColor ="rgb(255, 255, 0)";
    control = false;
    ls.setItem("mode","light");
}
    d.addEventListener("click",e=>{
        if (e.target.matches(botondark)){
            if (!control){
                darkMode();
            }else{
                lightMode();
            }
            
        }
    })
    d.addEventListener("DOMContentLoaded",e=>{
        if (ls.getItem("mode") === null) ls.setItem("mode","light");
        if (ls.getItem("mode") ==="light") lightMode();
        if (ls.getItem("mode") ==="dark") darkMode(); 
    })
}