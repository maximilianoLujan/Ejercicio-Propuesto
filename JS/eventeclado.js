export default function teclado(pelota){
    const d = document,
        $pelota = d.querySelector(pelota)
    d.addEventListener("keydown",e=>{
        console.log(e.key)
        if (e.key == "ArrowLeft"){
            $pelota.style.left -= "10px";
        } else if (e.key == "ArrowUp"){
            $pelota.style.top -= "10px";
        } else if (e.key == "ArrowRight"){
            $pelota.style.left += "10px";
        } else if (e.key == "ArrowDown"){
            $pelota.style.top += "10px";
        }
    })
}