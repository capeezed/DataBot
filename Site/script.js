//Mostrar Senha
document.addEventListener("DOMContentLoaded", function(){
    const passwordInput = document.querySelector("input[type='password']")
    const toggleIcon = document.querySelector(".bxs-lock-alt")

    toggleIcon.addEventListener("click", function(){
        if(passwordInput.type === "password"){
            passwordInput.type = "text"
            toggleIcon.classList.replace("bxs-lock-alt", "bxs-lock-open-alt")
        } else{
            passwordInput.type = "password"
            toggleIcon.classList.replace("bxs-lock-open-alt", "bxs-lock-alt")
        }
    })
})


