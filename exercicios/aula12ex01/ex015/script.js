function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} Horas.`

    if (hora >= 0 && hora < 12) {
        // BOM DIA
        document.body.style.background = '#89CEF8'
        img.src = 'manha.png'
    } else if (hora >= 12 && hora <= 18) {
        // BOA TARDE
        document.body.style.background = '#EE6F04'
        img.src = 'tarde.png'
    } else {
        // BOA NOITE
        document.body.style.background = '#032241'
        img.src = 'noite.png'
    }

}


