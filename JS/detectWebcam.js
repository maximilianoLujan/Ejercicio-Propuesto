const d = document,
    n = navigator;
export default function detecWbcm(id){
    const $id = d.getElementById(id);


    if (n.mediaDevices.getUserMedia){
        n.mediaDevices
        .getUserMedia({video: true,audio: false})
        .then((stream)=>{
            $id.srcObject = stream;
            $id.play();
        })
        .catch(err=>{
            $id.insertAdjacentHTML("beforebegin",`<p style="text-align:center;">Ha surgido el error ${err}, conecta nuevamente la camara</p>`)
        })
    }
}
