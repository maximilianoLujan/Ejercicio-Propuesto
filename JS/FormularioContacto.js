const d = document;
export default function comprobarForm(){
    const $inputs = d.querySelectorAll(".contenedor-form [required]");
    let pattern;
    $inputs.forEach(el =>{
        const $span = d.createElement("span");
        $span.id += el.name;
        $span.textContent = el.title;
        $span.classList += "estilosspan";
        $span.classList += " none"
        el.insertAdjacentElement("afterend",$span)
    })
    d.addEventListener("keyup", e =>{
        if (e.target.matches(".contenedor-form [required]")){
            let pattern = new RegExp(e.target.pattern || e.target.dataset.pattern);
            if (!pattern.test(e.target.value)){
                e.target.nextSibling.classList.remove("none");
            } else{
                e.target.nextSibling.classList.add("none");
            }
            if (e.target.value == ""){
                console.log("hola")
                e.target.nextSibling.classList.add("none");
            }
        }
    })
}