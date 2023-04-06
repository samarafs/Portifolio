const form = document.getElementById('form')
const campos = document.querySelectorAll('.contato-input')
const span = document.querySelectorAll('.span-required')
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

function validardados(){
    nameValidate();
    emailValidate();
    
}
//form.addEventListener('submit',(Event) =>{
    //Event.preventDefaultS();
    //nameValidate();
    //emailValidate();
    //conteudoValidate();
//})
function setError(index){
    campos[index].style.border = '2px solid red'
    span[index].style.display = 'block'
}
function removeError(index){
    campos[index].style.border = ''
    span[index].style.display = 'none'
}
function nameValidate(){
    if(campos[0].value.length < 3){
        setError(0)
    }else{
        removeError(0)
    }
}
function emailValidate(){
    if(emailRegex.test(campos[1].value)){
        removeError(1)
    }else{
        setError(1)
    }
}
//