const d = document;
export default function buscarElementos(input,items){
    const $input = d.querySelector(input),
        $misitems =d.querySelectorAll(items);
    



    d.addEventListener("keydown", e=>{
        if(e.target.matches(input)){
            setTimeout(() => {
                $misitems.forEach(el =>{
                    let eltxt = el.lastElementChild.firstElementChild.textContent;
                    console.log(eltxt);
                    console.log($input.value);
                })
            },1000);
        }
    })
}
//el.lastElementChild.firstElementChild.textContent