let submitForm = () => {
    let nombre = document.getElementById("nombreInput");
    let apellido = document.getElementById("apellidoInput");
    let email = document.getElementById("emailInput");
    //let comentarios = document.getElementById("comentariosInput");
    let password = document.getElementById("passwordInput");

    let nameValid = validarInputName(nombre);
    let lastnameValid = validarInputLastName(apellido);
    let emailValid = validarInputEmail(email);
    let passValid = validarInputPassword(password);

    if (!nameValid || !lastnameValid || !emailValid || !passValid){
        return false;
    }else{
        alert("Formulario enviado con éxito!");
        return true;
    }

    
};

const validarInputEmail = (input) => {

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input.value)) {
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        document.getElementById("emailError").style.display = "none";
        return true;
    }
    else{
        input.classList.add("is-invalid");
        input.classList.remove("is-valid");
        document.getElementById("emailError").style.display = "block";
        return false;
    }
};

const validarInputPassword = (input) => {
    if ((input.value.length < 6)) {
        input.classList.add("is-invalid");
        input.classList.remove("is-valid");
        document.getElementById("passwordError").style.display = "block";
        return false;

    } else {
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        document.getElementById("passwordError").style.display = "none";
        return true;
    }
};

const validarInputName = (input) => {
    if (!input.value) {
        input.classList.add("is-invalid");
        input.classList.remove("is-valid");
        document.getElementById("NameError").style.display = "block";
        return false;
    } else {
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        document.getElementById("NameError").style.display = "none";
        return true;
    }
};

const validarInputLastName = (input) => {
    if (!input.value) {
        input.classList.add("is-invalid");
        input.classList.remove("is-valid");
        document.getElementById("LastNameError").style.display = "block";
        return false;
    } else {
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        document.getElementById("LastNameError").style.display = "none";
        return true;
    }
};