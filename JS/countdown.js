const d = document;
export default function countdown(days,img,audio,hours,minutes,seconds,date){
    const $img = d.querySelector(img),
     $audio = d.querySelector(audio),
     $hours = d.querySelector(hours),
     $minutes = d.querySelector(minutes),
     $seconds = d.querySelector(seconds),
     $days = d.querySelector(days);
     let dateM = date.getTime();

    console.log(typeof($days.textContent))
    let intervalo = setInterval(() => {
        let dateNow = new Date().getTime(),
            diference = dateM - dateNow;
        
        
        const dias =(Math.floor(diference/8.64e+7));
        const horas = (Math.floor((diference -((dias)*8.64e+7))/3.6e+6));
        const minutos = (Math.floor((diference -dias*8.64e+7-horas*3.6e+6)/60000));
        const segundos = (Math.floor((diference -dias*8.64e+7-horas*3.6e+6 - minutos*60000)/1000));

            $days.textContent = dias.toString();
            $hours.textContent = horas.toString();
            $minutes.textContent = minutos.toString();
            $seconds.textContent = segundos.toString();

        if (($days.textContent === "0")&&($hours.textContent === "0")&&($minutes.textContent === "0")&&($seconds.textContent === "0")){
            clearInterval(intervalo);
            $img.classList.toggle("img-visible");
            $audio.play();
            setTimeout(() => {
                $img.classList.toggle("img-visible");
                $audio.pause();
            }, 8000);
        }
    }, 1000);
    
} 
