const d = document,
    w = window;
export default function observarvideo(video){
    const $mivideo = d.getElementById(video);
    const reproducir = (entries)=>{
        entries.forEach(entry=>{
            if (entry.isIntersecting){
                $mivideo.play();
            }
            else{
                $mivideo.pause()
            } 
        }) 
    }
    const myObserver = new IntersectionObserver(reproducir,
    {
        threshold: 0.5
    })
    myObserver.observe($mivideo);

}
