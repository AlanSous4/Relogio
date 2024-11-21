function carregando() {

const msg = window.document.getElementById("msg")
const img = window.document.getElementsByClassName("imagem")
const data = new Date()
const hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 0 && hora <= 12) {
    //Bom Dia!
    document.body.style.background = `#e2cd9f`
    img.src = `fotomanha.png`
}else if (hora >= 12 && hora <= 18) {
    //Boa Tarde!
    document.body.style.background = `#b9846f`
    img.src = `fototarde.png`
}else {
    //Boa Noite!
    document.body.style.background = `#515154`
    img.src = `fotonoite.png`
}
}
