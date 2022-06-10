export default function formularioVideo(url,width,height,botonabrir,botoncerrar){
    const d = document,
        w = window,
        $url = d.getElementById(url),
        $width = d.getElementById(width),
        $height = d.getElementById(height);
        let a;

        d.addEventListener("click",e=>{
            if (e.target.matches(botonabrir)){
                const wi = $width.value;
                const h = $height.value;
                console.log(typeof(wi))
                a = window.open($url.value,"",`width=${wi},height=${h},scrollbars=NO`);
            }
            if (e.target.matches(botoncerrar)){
                a.close();
            }
        })
    
}