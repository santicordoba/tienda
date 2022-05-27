window.addEventListener('load', ()=> {
    const boton = document.querySelector('#boton')
    const nombre = document.getElementById('nombre')
    const email = document.getElementById('email')
    const radCompra = document.getElementById('radCompra')
    const radVenta = document.getElementById('radVenta')
    const consulta = document.getElementById("textArea");



    boton.addEventListener('click', (e) => {
        e.preventDefault()
        validaCampos()
    })
    
    const validaCampos = ()=> {
        // si se cumplen 4 validaciones se devuelve mensaje de exito
        let cantValidaciones = 0;

        //capturar los valores ingresados por el usuario
        const nombreValor = nombre.value.trim()
        const emailValor = email.value.trim()
    

        //validando campo nombre
        if(!nombreValor){
            alert("Debe ingresar un nombre")
        }  else {
            cantValidaciones++;
        }

        
        //validando campo email

        const validaEmail = (email) => {
            return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);        
        }

        if(!emailValor){
            alert("Debe ingresar un email")          
        }else if(!validaEmail(emailValor)) {
            alert("El email es invalido")
        }else {
            cantValidaciones++;
        }

        //validar radios
        if(!radCompra.checked && !radVenta.checked){
            alert("Debe seleccionar al menos una de las opciones de consulta")
        } else {
            cantValidaciones++;
        }

        //validando campo consulta
        if(consulta.value==null ||consulta.value==""){
            alert("Por favor rellene el campo con su consulta")
        }else{
            cantValidaciones++;
        }

        if(cantValidaciones == 4){

            alert(`Hola ${nombre.value}\nGracias por completar el formulario.\nA la brevedad nos contactaremos contigo`)
        }




    }

})