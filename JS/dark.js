const d = document;
export default function darkMode(botondark,darkmode,darkmode2){
   const $botondark = d.querySelector(botondark),
    $darkmode = d.querySelectorAll(`[${darkmode}]`),
    $darkmode2 = d.querySelectorAll(`[${darkmode2}]`);
    let control = false;
    d.addEventListener("click",e=>{
        if (e.target.matches(botondark)){
            if (!control){
                $darkmode2.forEach(el=>{
                    el.classList.add("darkh");
                })
                $darkmode.forEach(el=>{
                    el.classList.add("dark");
                    $botondark.style.backgroundImage = "url(../Icons/daylight.png)"
                    control = true;
                })
            }else{
                $darkmode2.forEach(el=>{
                    el.classList.remove("darkh");
                })
                $darkmode.forEach(el=>{
                    el.classList.remove("dark");
                    $botondark.style.backgroundImage = "url(../Icons/night-mode.png)"
                    control = false;
                })
            }
            
        }
    })
    console.log($darkmode);
}