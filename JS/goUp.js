export default function goUp(boton){
    const d = document,
        $boton = d.querySelector(boton);

    $boton.addEventListener("click", e=>{
        window.scroll({
            top: 0,
            behavior: 'smooth'
          });
    })


}


