let control = false;
export default function responsiveDesign(enlaces,div1,div2){
    const d = document,
    w = window;
    const $enlaces = d.querySelectorAll(enlaces),
        $contenedorYoutube = d.querySelector(div1),
        $contenedorMap = d.querySelector(div2);
    const agregarYou = ()=>{
        $contenedorYoutube.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/BS5RX27VaAQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    }
    const agregarMap = ()=>{
        $contenedorMap.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12762.189051388685!2d-60.34542739391327!3d-36.901177631413056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959445b000276f11%3A0x6ddc093fa242f724!2sC.A.E.%20Golf%20Club%20Atl%C3%A9tico%20Estudiantes!5e0!3m2!1ses-419!2sar!4v1654795581546!5m2!1ses-419!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
    }
    if (w.innerWidth < 1000){
        $enlaces.forEach(el =>{
            el.classList.toggle("enlace-visible");
            control = true;
        })       
    } else{
        $enlaces.forEach(el =>{
            el.classList.toggle("enlace-visible");
            agregarMap();
            agregarYou();
            control = false;
        })       
    }
    w.addEventListener("resize", e =>{
        if (w.matchMedia("(min-width: 1000px)").matches) {
            if (control){
                $enlaces.forEach(el =>{
                    el.classList.remove("enlace-visible");
                    agregarMap();
                    agregarYou();
                    control = false;
                })
            }
          } else {
              if (!control){
                $enlaces.forEach(el =>{
                    el.classList.add("enlace-visible");
                    $contenedorMap.removeChild($contenedorMap.querySelector("iframe"));
                    $contenedorYoutube.removeChild($contenedorYoutube.querySelector("iframe"))
                    control = true;
                })
              }
          }
    })
}