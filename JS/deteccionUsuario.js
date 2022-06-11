const d = document,
n = navigator,
ua = n.userAgent;
export default function detectar(id){
        const $id = d.getElementById(id),
            isMobile = {
                android: ()=> ua.match(/android/i),
                ios: ()=> ua.match(/iphone/i||/ipad/i||/ipod/i),
                any: function(){
                    return (this.android()||this.ios())
                }
            },
            isDesktop = {
                windows: ()=> ua.match(/windows/i),
                linux: ()=> ua.match(/linux/i),
                mac: ()=> ua.match(/mac os/i),
                any: function(){
                    return (this.linux()||this.mac()||this.windows())
                }
            },
            isNavigator = {
                chrome: ()=> ua.match(/chrome/i),
                mozilla: ()=> ua.match(/firefox/i),
                edge: ()=> ua.match(/edge/i),
                safari: ()=> ua.match(/safari/i),
                any: function(){
                    return (this.chrome()||this.mozilla()||this.edge()||this.safari())
                }
            };

    $id.innerHTML = `<ul style="text-align:center;">
                        <li>${ua}</li>
                    </ul>`
    
    if (isMobile.any() !== null){
        $id.innerHTML += `<p style="text-align:center;">El contenido se esta viendo en un: ${isMobile.any()}</p>`
    }
    if (isDesktop.any() !== null){
        $id.innerHTML += `<p style="text-align:center;">El contenido se esta viendo en un sistema operativo: ${isDesktop.any()}</p>`
    }
    $id.innerHTML += `<p style="text-align:center;">El usuario esta utilizando el navegador: ${isNavigator.any()}</p>`


    /*
        Contenido exclusivo para navegadores chrome
    */
   if (isNavigator.chrome()){
    $id.innerHTML+=`<p style="background-color:yellow;text-align:center;"><b>FELICITACIONES,</b> este contenido solo esta disponible en chrome</p>`
   }
   if (isNavigator.mozilla()){
    $id.innerHTML+=`<p style="background-color:green;text-align:center;"><b>FELICITACIONES,</b> este contenido solo esta disponible en mozilla firefox</p>`
   }

}