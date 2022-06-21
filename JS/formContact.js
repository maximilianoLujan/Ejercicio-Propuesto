const d = document;
export default function comprobarFormulario(name,matter,email,msg,nameE,matterE,emailE,msgE,e){
    const $name = d.querySelector(name),
        $matter = d.querySelector(matter),
        $email = d.querySelector(email),
        $msg = d.querySelector(msg),
        $nameE = d.querySelector(nameE),
        $matterE = d.querySelector(matterE),
        $emailE = d.querySelector(emailE),
        $msgE = d.querySelector(msgE);
    let controlM = false;

        if (e.target.matches(msg)){
            setTimeout(() => {
                if ($msg.value.length > 255){
                    $msgE.classList.add("mensajeerroneo");
                    controlM = true;
                } else{
                    if (controlM = true){
                        $msgE.classList.remove("mensajeerroneo")
                    }
                }
            }, 200);
        }

}
