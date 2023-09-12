const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

const myinputControl = document.querySelectorAll(".input-control");

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


let errStatus = false;
form.addEventListener('submit', e => {
    e.preventDefault();


    validateInputs();

    if (!errStatus) {
        let user = { name: username.value, email: email.value, password: password.value };

        let users;

        if (localStorage.getItem("users") === null) {
            users = [];
        } else {
            users = JSON.parse(localStorage.getItem("users"));
        }



        users.push(user);

        localStorage.setItem("users", JSON.stringify(users));
        localStorage.setItem("loginUser",JSON.stringify({name:user.name,email:user.email,status:true}));

       
        setTimeout(()=>{
            username.value = "";
            email.value = "";
            password.value = "";
            password2.value = "";   

            myinputControl.forEach(input => {
                input.classList.remove("success");
            })
        },1000);


        location.href="index.html";

    }



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
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if (usernameValue === '') {
        setError(username, 'Username is required');
        errStatus = true;
    } else {
        setSuccess(username);
        errStatus = false;
    }

    if (emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
        errStatus = true;
    } else {
        setSuccess(email);
        errStatus = false;
    }

    if (passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 6) {
        setError(password, 'Password must be at least 6 character.');
        errStatus = true;
    } else {
        setSuccess(password);
        errStatus = false;
    }

    if (password2Value === '') {
        setError(password2, 'Please confirm your password');
        errStatus = true;
    } else if (password2Value !== passwordValue) {
        setError(password2, "Passwords doesn't match");
        errStatus = true;
    } else {
        setSuccess(password2);
        errStatus = false;
    }

};
