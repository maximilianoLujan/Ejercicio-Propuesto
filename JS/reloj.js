export default function reloj(botoninicreloj,botonfinreloj,reloj,inalarma,finalarma,audio){
    const d = document;
    d.addEventListener("click",e=>{
        if(e.target.matches(botoninicreloj)){
            d.querySelector(reloj).style.opacity = 1;
            d.querySelector(botoninicreloj).setAttribute("disabled","true");
            d.querySelector(botoninicreloj).style.cursor = "auto";
            let intervalo = setInterval(() => {
                let lahora = new Date();
                let lahorita = (`${lahora.getHours().toString()}:${lahora.getMinutes().toString()}:${lahora.getSeconds().toString()}`)
                d.querySelector(reloj).textContent = lahorita;
            }, 1000);
            d.querySelector(reloj).classList.toggle("is-activer")  
        }
        if (e.target.matches(botonfinreloj)){
            d.querySelector(botoninicreloj).removeAttribute("disabled");
            d.querySelector(botoninicreloj).style.cursor = "pointer";
            d.querySelector(reloj).style.opacity = 0;
        }
        if (e.target.matches(inalarma)){
            d.querySelector(audio).play();
            d.querySelector(audio).setAttribute("loop","true");
            d.querySelector(inalarma).setAttribute("disabled","true");
            d.querySelector(inalarma).style.cursor = "auto";
        }
        if (e.target.matches(finalarma)){
            d.querySelector(audio).pause();
            d.querySelector(inalarma).removeAttribute("disabled");
            d.querySelector(inalarma).style.cursor = "pointer";
        }
    })
}