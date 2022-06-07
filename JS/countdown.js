const d = document;
export default function countdown(img,audio,hours,minutes,seconds){
    const $img = d.querySelector(img),
     $audio = d.querySelector(audio),
     $hours = d.querySelector(hours),
     $minutes = d.querySelector(minutes),
     $seconds = d.querySelector(seconds);
     let time = new Date(2022,3,0,6,0,0,0);
     console.log(time)
     let s = time.getSeconds(),
     m = time.getMinutes(),
     h = time.getHours();



    $hours.textContent = ((time.getHours()).toString());
    $minutes.textContent = ((time.getMinutes()).toString());
    $seconds.textContent = ((time.getSeconds()).toString());
    let pasohora = false;
    

    let counter = setInterval(() => {
        if (s === 0){
            if ((m === 0)&&(h ===0)){
                $img.classList.toggle("img-visible");
                $audio.play();
                setTimeout(() => {
                    $audio.pause();
                    $img.classList.toggle("img-visible");
                }, 10000);
                clearInterval(counter);
            }
            if (m===0){
                if (h !== 0){
                    h--;
                    $hours.textContent = (h.toString());
                    m = 59;
                    $minutes.textContent = (m.toString());
                }
            }else{
                m--;
                $minutes.textContent = (m.toString());
            }
            s =60;
        }else {
            s--;
            $seconds.textContent = (s.toString());
        }
    }, 1000);
}
