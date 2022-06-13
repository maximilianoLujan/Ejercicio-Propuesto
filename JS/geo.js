const d = document,
    n = navigator;

export default function descubrirGeo(ul){
    const $listaDatos = d.querySelector(ul);

    let options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      };
    if (n.geolocation.getCurrentPosition){
        n.geolocation
        .getCurrentPosition(pos =>{
            $listaDatos.innerHTML = `<li>Precision de ${pos.coords.accuracy} metros</li>
                                    <li>Latitud: ${pos.coords.latitude}</li>
                                    <li>Longitud: ${pos.coords.longitude}</li>`
        },err=>{
            $listaDatos.innerHTML = `<li>Se ha producido el error ${err.message}</li>`
        },options)
    }
}