 
 
const email = document.getElementById('email')
var error = document.getElementById('img')


function enviar(){
  /*  O algoritimo regex abaixo foi copiado do site:  https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address */
  const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/  
    
    if(regex.test(email) === true){
      alert('Email válido')
    }else{
      error.classList.add('show')
        
    }
    
}




email.addEventListener('click', function(){

  if(error.classList.contains('show')){
    error.classList.remove('show')
    email.value = ''
  }
 })
