export default function hamburgerMenu(boton,menu,links){
    const d = document;

    d.addEventListener("click",e=>{
        if(e.target.matches(boton) || e.target.matches(`${boton} *`)){
            d.querySelector(menu).classList.toggle("is-active");
            d.querySelector(boton).classList.toggle("is-active");
        }
        if (e.target.matches(links)){
            d.querySelector(menu).classList.toggle("is-active");
            d.querySelector(boton).classList.remove("is-active");

        }
    })
}