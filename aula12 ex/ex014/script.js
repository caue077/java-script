function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora sao ${hora} horas`

    if (hora >= 0 && hora < 12) {
        img.src = './img/manha.png'
        document.body.style.background = '#e2cd9f'
        //BOM DIA
    } else if (hora >= 12 && hora <= 18) {
        img.src = './img/tarde.png'
        document.body.style.background = '#b9846f'
        // BOA TARDE
    } else {
        img.src = './img/noite.png'
        document.body.style.background = '#515154'
        // BOA NOITE
    }
}