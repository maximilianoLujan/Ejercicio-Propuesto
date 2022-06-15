const d = document;
export default function sliderimg(boton1,boton2,img,url1,url2,url3){
    const $miimg = d.querySelector(img);
    let auxiliar = 1;


    console.log($miimg);
    d.addEventListener("click", e =>{
        if (e.target.matches(boton1)){
            switch (auxiliar) {
                case 1:
                    $miimg.classList.toggle("desaparecer-img")
                    setTimeout(() => {
                        $miimg.setAttribute("src",`${url3}`)
                        $miimg.classList.toggle("desaparecer-img")
                    }, 500);
                    auxiliar = 3;
                    break;
                case 2:
                    $miimg.classList.toggle("desaparecer-img")
                    setTimeout(() => {
                        $miimg.setAttribute("src",`${url1}`)
                        $miimg.classList.toggle("desaparecer-img")
                    }, 500);
                    auxiliar = 1;
                    break;
                case 3:
                    $miimg.classList.toggle("desaparecer-img")
                    setTimeout(() => {
                        $miimg.setAttribute("src",`${url2}`)
                        $miimg.classList.toggle("desaparecer-img")
                    }, 500);
                    auxiliar = 2;

                    break;
            }
        }
        if (e.target.matches(boton2)){
            switch (auxiliar) {
                case 1:
                    $miimg.classList.toggle("desaparecer-imgd")
                    setTimeout(() => {
                        $miimg.setAttribute("src",`${url2}`)
                        $miimg.classList.toggle("desaparecer-imgd")
                    }, 500);
                    auxiliar = 2;
                    break;
                case 2:
                    $miimg.classList.toggle("desaparecer-imgd")
                    setTimeout(() => {
                        $miimg.setAttribute("src",`${url3}`)
                        $miimg.classList.toggle("desaparecer-imgd")
                    }, 500);
                    auxiliar = 3;
                    break;
                case 3:
                    $miimg.classList.toggle("desaparecer-imgd")
                    setTimeout(() => {
                        $miimg.setAttribute("src",`${url1}`)
                        $miimg.classList.toggle("desaparecer-imgd")
                    }, 500);
                    auxiliar = 1;

                    break;
            }
        }
    })
}