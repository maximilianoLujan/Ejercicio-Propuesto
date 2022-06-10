export default function formularioVideo(url,width,height,botonabrir,botoncerrar){
    const d = document,
        w = window,
        $url = d.getElementById(url),
        $width = d.getElementById(width),
        $height = d.getElementById(height),
        $botonabrir = d.querySelector(botonabrir),
        $botoncerrar = d.querySelector(botoncerrar);

    
        d.addEventListener("click",e=>{
            if (e.target.matches(botonabrir)){
                console.log($url.value);
                console.log($width.value);
                console.log($height.value);
            }
            if (e.target.matches(botoncerrar)){
                
            }
        })
    
}