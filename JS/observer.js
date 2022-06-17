const d=document,
    w = window,
    n = navigator;
export default function observarScroll(seccion){
    const $enlaces = d.querySelectorAll("a[data-enlace]"),
        $missecciones = d.querySelectorAll(seccion),
        $busqueda = d.getElementById("seccion10"),
        $enlace10 = d.getElementById("en10");
    
    
    const iluminar = (entries) =>{
        entries.forEach(entry=>{
            if (entry.isIntersecting){
                $enlaces.forEach(en=>{
                    if (en.getAttribute("href") === `#${entry.target.id}`){
                        en.classList.add("enlaceactivo")
                    }
                })
            } else{
                $enlaces.forEach(en=>{
                    if (en.getAttribute("href") === `#${entry.target.id}`){
                        en.classList.remove("enlaceactivo")
                    }
                })
            }
        })
    }
    const observer = new IntersectionObserver(iluminar,{threshold:0.8});
    const iluminar10 = (entries) =>{
        entries.forEach(entry =>{
            if (entry.isIntersecting){
                $enlace10.classList.add("enlaceactivo")
            } else $enlace10.classList.remove("enlaceactivo");
        })
    }
    const observarsec10 = new IntersectionObserver(iluminar10,{threshold:0.3});


    $missecciones.forEach(el =>{
        observer.observe(el);
    })
    observarsec10.observe($busqueda);
}