export default function teclado(e,pelota){
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