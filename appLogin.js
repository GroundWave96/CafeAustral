const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

function passwordText() {
    var x = document.getElementById("passwordLogin");
    var y = document.getElementById("hide1");
    var z = document.getElementById("hide2");

    if (x.type === 'password') {
        x.type = "text"
        y.style.display = "block"
        z.style.display = "none"
    }
    else {
        x.type = "password"
        y.style.display = "none"
        z.style.display = "block"
    }
};

function passwordTextRegister() {
    var x = document.getElementById("passwordRegister");
    var y = document.getElementById("hide1R");
    var z = document.getElementById("hide2R");

    if (x.type === 'password') {
        x.type = "text"
        y.style.display = "block"
        z.style.display = "none"
    }
    else {
        x.type = "password"
        y.style.display = "none"
        z.style.display = "block"
    }
};
