import ajaxService from "./ajaxService";

const display=()=>{
    ajaxService()
    .then(result =>{
        for(let Arraykey in result){
            let item = document.createElement('div')
            item.className = "carousel-item"
            document.querySelector('.carousel-inner').appendChild(item)
            if(Arraykey === '0'){
                item.className = "carousel-item active"
            }else{
                item.classList.add("carousel-item")
            }
            for(let objectKey in result[Arraykey]){
                let msg = document.createElement('p')
                msg.innerHTML=(result[Arraykey][objectKey])
                document.querySelector('.carousel-inner').appendChild(item)
                item.appendChild(msg)
                console.log(result[Arraykey][objectKey])
                }
            }
        }
    )}


export default display