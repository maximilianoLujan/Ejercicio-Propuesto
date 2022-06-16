const d = document;
export default function buscarElementos(input,items){
    const $misitems = d.querySelectorAll(items);
    let indice = 0;

    d.addEventListener("keyup",e=>{
        if (e.target.matches(input)){
            $misitems.forEach(el => {
                el.lastElementChild.textContent.toLowerCase().includes(e.target.value.toLowerCase()) ?el.classList.remove("filter"):el.classList.add("filter");
            })
        }
    })
}