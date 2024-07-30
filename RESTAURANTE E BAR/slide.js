var radio = document.querySelector('.manual-btn')
var cont = 1

document.getElementById('radio1').checked=true

setInterval(()=>{
    proximalmg()
},2000)

function proximalmg(){
    cont++
    
    if(cont>2){
        cont = 1
    }

    document.getElementById('radio'+cont).checked= true

}