const d=document,
    w = window,
    n = navigator;
export default function observarScroll(seccion,enlaces){
    let i = 0;
    const $missecciones = d.querySelectorAll(seccion),
        $misenlaces = d.querySelectorAll(enlaces);
    const iluminar = (entradas,observer) =>{
        entradas.forEach(el=>{
                switch (el.target.id) {
                    case "seccion1":
                        $misenlaces[0].classList.toggle("enlacemenuvisible");
                        observer.unobserve(el)
                        break;
                    case "seccion2":
                        $misenlaces[1].classList.toggle("enlacemenuvisible");
                        observer.unobserve(el)
                        break;
                    case "seccion3":
                        $misenlaces[2].classList.toggle("enlacemenuvisible")
                        observer.unobserve(el)
                        break;
                    case "seccion4":
                        $misenlaces[3].classList.toggle("enlacemenuvisible")
                        observer.unobserve(el)
                        break;
                    case "seccion5":
                        $misenlaces[4].classList.toggle("enlacemenuvisible")
                        observer.unobserve(el)
                        break;
                    case "seccion6":
                            $misenlaces[5].classList.toggle("enlacemenuvisible")
                            observer.unobserve(el)
                    break;
                    case "seccion7":
                            $misenlaces[6].classList.toggle("enlacemenuvisible")
                            observer.unobserve(el)
                    break;
                    case "seccion8":
                            $misenlaces[7].classList.toggle("enlacemenuvisible")
                            observer.unobserve(el)
                    break;
                    case "seccion9":
                            $misenlaces[8].classList.toggle("enlacemenuvisible")
                            observer.unobserve(el)
                    break;
                    case "seccion10":
                            $misenlaces[9].classList.toggle("enlacemenuvisible")
                            observer.unobserve(el)
                    break;
                    case "seccion11":
                            $misenlaces[10].classList.toggle("enlacemenuvisible")
                            observer.unobserve(el)
                    break;
                    case "seccion12":
                            $misenlaces[11].classList.toggle("enlacemenuvisible")
                            observer.unobserve(el)
                    break;
                    case "seccion13":
                            $misenlaces[12].classList.toggle("enlacemenuvisible")
                            observer.unobserve(el)
                    break;
                    }
        })
    }
    const observer = new IntersectionObserver(iluminar,{
        root:null,
        rootMargin: '150px',
        threshold:1,
    })
    $missecciones.forEach(el=>{
        observer.observe(el);
    })
}