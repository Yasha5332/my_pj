const form = document.getElementById('form');
const email = document.getElementById('email');
const password = document.getElementById('password');
const togglePassword = document.querySelector("#togglePassword")

let toggleEye = false;


togglePassword.addEventListener("click",(e)=>{

    toggleEye = !toggleEye;

    if(toggleEye){
        password.type = 'text';
        togglePassword.classList.remove("fa-eye-slash");
        togglePassword.classList.add("fa-eye");
    }else{
        password.type = 'password';
        togglePassword.classList.remove("fa-eye");
        togglePassword.classList.add("fa-eye-slash");
    }
})

const myinputControl = document.querySelectorAll(".input-control");

form.addEventListener('submit', e => {
    e.preventDefault();


    validateInputs();

    let isValid = false;
    myinputControl.forEach(input => {
        if (input.classList.contains("success")) {
            isValid = true;
        }
    });


    // if (isValid) {

    let users = JSON.parse(localStorage.getItem("users"));

    if(users == null){
        setError(email,"There is no user with that email please register");
    }

    let loginUser = { lemail: email.value, lpassword: password.value };


    let findUser = users.find(user => user.email === loginUser.lemail);
    if (findUser) {
        if (findUser.password === loginUser.lpassword) {
            setSuccess(email);
            setSuccess(password);

            location.href = "index.html";

            localStorage.setItem("loginUser",JSON.stringify({name:findUser.name,email:findUser.email,status:true}));

        }else {
            console.log('error ');
            setError(password,"Password is not correct");
        }
    } else {
        setError(email,"Email is not correct");
    }



    // }



});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');

}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');

};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();



    if (emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if (passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 6) {
        setError(password, 'Password must be at least 6 character.')
    } else {
        setSuccess(password);
    }



};
