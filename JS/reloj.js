export default function reloj(botoninicreloj,botonfinreloj,reloj,inalarma,finalarma,audio){
    const d = document;
    let intervalo;
    const $reloj = d.querySelector(reloj),
        $inicioreloj = d.querySelector(botoninicreloj),
        $audio = d.querySelector(audio),
        $inicioalarma = d.querySelector(inalarma);
    d.addEventListener("click",e=>{
        if(e.target.matches(botoninicreloj)){
            $inicioreloj.setAttribute("disabled","true");
            $inicioreloj.style.cursor = "auto";
            intervalo = setInterval(() => {
                let lahora = new Date();
                let lahorita = lahora.toLocaleTimeString();
                $reloj.textContent = lahorita;
            }, 1000);
            $reloj.classList.toggle("is-activer")  
        }
        if (e.target.matches(botonfinreloj)){
            $inicioreloj.removeAttribute("disabled");
            $inicioreloj.style.cursor = "pointer";
            clearInterval(intervalo);
            $reloj.classList.toggle("is-activer")  
        }
        if (e.target.matches(inalarma)){
            $audio.play();
            $audio.setAttribute("loop","true");
            $inicioalarma.setAttribute("disabled","true");
            $inicioalarma.style.cursor = "auto";
        }
        if (e.target.matches(finalarma)){
            $audio.pause();
            $inicioalarma.removeAttribute("disabled");
            $inicioalarma.style.cursor = "pointer";
        }
    })
}