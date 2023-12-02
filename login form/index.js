const modalLogIn = document.getElementById(`modalLogIn`);
const modalSignUp = document.getElementById(`modalSignUp`);
const modalBtn = document.getElementById(`modalBtn`);
const logIn = document.getElementById(`logIn`);
const signUp = document.getElementById(`signUp`);
const cancel = document.querySelector(`.cancelbtn`);
const cancelBtn = document.querySelector(`.cancelBtn`);


logIn.addEventListener(`click`, ()=>{
    modalLogIn.style.display= `flex`;
    modalBtn.style.display= `none`;
})

signUp.addEventListener(`click`, ()=>{
    modalSignUp.style.display= `flex`;
    modalBtn.style.display= `none`;
})
cancel.addEventListener(`click`,()=>{
    modalLogIn.style.display= `none`;
    modalSignUp.style.display= `none`;
    modalBtn.style.display= `grid`;
})

cancelBtn.addEventListener(`click`,()=>{
    modalLogIn.style.display= `none`;
    modalSignUp.style.display= `none`;
    modalBtn.style.display= `grid`;
})

window.onclick = function(event) {
    if (event.target == modalLogIn) {
        modalLogIn.style.display = "none";
    }
    if (event.target == modalSignUp) {
        modalSignUp.style.display = "none";
    }
}