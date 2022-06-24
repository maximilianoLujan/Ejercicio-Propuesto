const d = document,
    w = window;
export default function narrarVoz(){
    const $select = d.querySelector(".seccion15-slct"),
        $txt = d.querySelector(".seccion15-txt")

    let timer = setInterval(function() {
        let voices = speechSynthesis.getVoices();
        if (voices.length !== 0) {
            voices.forEach(v=>{
                const $option = d.createElement("option");
                $option.textContent = v.name;
                $option.value = v.lang;
                $option.classList += "option";
                $select.appendChild($option)
            })
            clearInterval(timer);
        }
    }, 200);
    d.addEventListener("click", e=>{
        if (e.target.matches(".seccion15-btn")){
            if($txt.value === "" ||($select.selectedOptions[0].value === "no")){
                alert("Para este ejercicio debe rellenar el texto y seleccionar un idioma valido")
            } else{
                let u = new SpeechSynthesisUtterance($txt.value);
                u.lang = $select.selectedOptions[0].value;
                speechSynthesis.speak(u);
            }
        }
    })
}