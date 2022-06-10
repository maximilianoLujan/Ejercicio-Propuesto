let y = 0,
x = 0;
export default function ball(ball,stage,e){
    const d = document,
    $ball = d.querySelector(ball),
    $stage = d.querySelector(stage),
    $limitball = $ball.getBoundingClientRect(),
    $limitstage = $stage.getBoundingClientRect();
    switch (e.code) {
    case "ArrowUp":
        if ($limitball.top > $limitstage.top){
            e.preventDefault();
            y--; 
        }          
    break;
    case "ArrowDown":
        if ($limitball.bottom < $limitstage.bottom){
            e.preventDefault();
            y++; 
        }
    break;
    case "ArrowLeft":
        if ($limitball.left > $limitstage.left){
            e.preventDefault();
            x--; 
        }
    break;
    case "ArrowRight":
        if ($limitball.right < $limitstage.right){
            e.preventDefault();
            x++; 
        }
    break
    }
    $ball.style.transform = `translate(${x*5}px,${y*5}px)`;
}