function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert("[ERRO] Verifique os dados e tente novamente!")
    } else {
        var fsex = document.getElementsByName('sx')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', './img/bebe-homem.jpg')
                // criança
            } else if (idade < 21) {
                img.setAttribute('src', './img/jovem-homem.jpg')
                // jovem
            } else if (idade < 50) {
                img.setAttribute('src', './img/adulto-homem.jpg')
                // adulto
            } else {
                img.setAttribute('src', './img/idoso-homem.jpg')
                // idoso
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', './img/bebe-mulher.jpg')
                // criança
            } else if (idade < 21) {
                img.setAttribute('src', './img/jovem-mulher.jpg')
                // jovem
            } else if (idade < 50) {
                img.setAttribute('src', './img/adulta-mulher.jpg')
                // adulto
            } else {
                img.setAttribute('src', './img/idosa-mulher.jpg')
                // idoso
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}