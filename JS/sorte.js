const d = document;
export default function calcSorteo(boton,items){
    const $lenguajes = d.querySelectorAll(items),
        $miboton = d.querySelector(boton);


    d.addEventListener("click", e=>{
        if (e.target.matches(boton)){
            const num = Math.trunc(Math.random() * $lenguajes.length);
            alert(`El lenguaje ganador es ${$lenguajes[num].textContent}`)
        }
    })
}