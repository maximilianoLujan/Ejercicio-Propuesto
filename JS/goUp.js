export default function goUp(boton){
    const d = document;

    d.addEventListener("click", e=>{
        if (e.target.matches(boton)){
            window.scroll({
                top: 0,
                behavior: 'smooth'
              });
        }
    })


}


