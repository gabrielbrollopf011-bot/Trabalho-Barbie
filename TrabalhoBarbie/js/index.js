function acessar(){
    let usuario = document.getElementById("idUsuario");
    let botao = document.getElementById("botao");
    usuario.addEventListener("input",function({target}){
        let valor = target.value.length
        if(valor<3){
            botao.disabled = true;
        }
        else{
            botao.disabled = false;
        }
    })
}

function salvarLogin(){
    event.preventDefault()
    let usuario = document.getElementById("idUsuario");
    localStorage.setItem("nome", usuario.value);

    Swal.fire({
        title: "Logou com sucesso!",
        icon: "success"
    }).then(() => {
        window.location.href = "html/paginaPrincipal.html"
    })
}