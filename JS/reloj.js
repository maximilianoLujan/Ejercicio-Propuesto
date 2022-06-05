export default function reloj(botoninicreloj,botonfinreloj,reloj,inalarma,finalarma,audio){
    const d = document;
    const $reloj = d.querySelector(reloj),
        $inicioreloj = d.querySelector(botoninicreloj),
        $audio = d.querySelector(audio),
        $inicioalarma = d.querySelector(inalarma);
    d.addEventListener("click",e=>{
        if(e.target.matches(botoninicreloj)){
            $reloj.style.opacity = 1;
            $inicioreloj.setAttribute("disabled","true");
            $inicioreloj.style.cursor = "auto";
            let intervalo = setInterval(() => {
                let lahora = new Date();
                let lahorita = (`${lahora.getHours().toString()}:${lahora.getMinutes().toString()}:${lahora.getSeconds().toString()}`)
                $reloj.textContent = lahorita;
            }, 1000);
            $reloj.classList.toggle("is-activer")  
        }
        if (e.target.matches(botonfinreloj)){
            $inicioreloj.removeAttribute("disabled");
            $inicioreloj.style.cursor = "pointer";
            $reloj.style.opacity = 0;
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