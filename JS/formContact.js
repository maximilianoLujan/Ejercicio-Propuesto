const d = document;
export default function comprobarFormulario(name,matter,email,msg,nameE,matterE,emailE,msgE){
    const $name = d.querySelector(name),
        $matter = d.querySelector(matter),
        $email = d.querySelector(email),
        $msg = d.querySelector(msg),
        $nameE = d.querySelector(nameE),
        $matterE = d.querySelector(matterE),
        $emailE = d.querySelector(emailE),
        $msgE = d.querySelector(msgE),
        expname = /^([a-zA-Z]{2,}\s[a-zA-z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/,
        expmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    d.addEventListener("keyup", e =>{
        if (e.target.matches(msg)){
            if ($msg.value.length > 255){
                $msgE.classList.add("mensajeerroneo");
                $msg.classList.remove("bien");
                $msg.classList.add("mal");
            } else{
                $msg.classList.add("bien")
                    $msgE.classList.remove("mensajeerroneo");
                    $msg.classList.remove("mal");
            }
        }
        if (e.target.matches(matter)){
            if ($matter.value.length > 20){
                $matter.classList.add("mal");
                $matter.classList.remove("bien");
                $matterE.classList.add("mensajeerroneo");
            } else{
                $matter.classList.add("bien");
                $matter.classList.remove("mal");
                $matterE.classList.remove("mensajeerroneo")
            }
        }
        if (e.target.matches(name)){
            if ($name.value === ""){
                $name.classList.remove("mal");
                $nameE.classList.remove("mensajeerroneo");
            } else{
                if (expname.test($name.value)){
                    $name.classList.remove("mal");
                    $name.classList.add("bien");
                    $nameE.classList.remove("mensajeerroneo");
                } else{
                    $name.classList.add("mal");
                    $name.classList.remove("bien");
                    $nameE.classList.add("mensajeerroneo");
                }

            }
            
        }
        if (e.target.matches(email)){
            console.log($email,$emailE);
            if ($email.value === ""){
                $email.classList.remove("mal");
                $emailE.classList.remove("mensajeerroneo")
            } else{
                if (expmail.test($email.value)){
                    $email.classList.remove("mal");
                    $email.classList.add("bien");
                    $emailE.classList.remove("mensajeerroneo");
                } else{
                    $email.classList.add("mal");
                    $email.classList.remove("bien");
                    $emailE.classList.add("mensajeerroneo");
                }
            }
        }
        })

}
