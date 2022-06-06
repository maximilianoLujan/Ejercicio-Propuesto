export default function teclado(e,pelota){
    const d = document,
        $pelota = d.querySelector(pelota)
    if (e.key === "ArrowRight"){
        $pelota.style.left = "40px";
    }
    if ((e.code === "KeyA") && (e.shiftKey === true)){
        alert("Esto es una alerta creada por el atajo del teclado")
    }
    if ((e.code === "KeyC") && (e.shiftKey === true)){
        confirm("Esto es una confirmacion creada por el atajo del teclado")
    }
    if ((e.code === "KeyP") && (e.shiftKey === true)){
        prompt("Esto es un aviso creada por el atajo del teclado")
    }
}