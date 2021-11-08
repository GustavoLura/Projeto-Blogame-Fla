document.addEventListener("DOMContentLoaded", () =>{
    const loginForm = document.querySelector("#login");
    const cadastroForm = document.querySelector("#cadastro");

    document.querySelector("#linkCadastrar").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        cadastroForm.classList.remove("form--hidden");

    })

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        cadastroForm.classList.add("form--hidden");

    })
});