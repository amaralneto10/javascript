function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = window.document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'crianca-homem.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'jovem-homem.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'adulto-homem.png')
            } else {
                // Idoso
                img.setAttribute('src', 'idoso-homem.png')
            }


        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'crianca-mulher.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'jovem-mulher.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'adulta-mulher.png')
            } else {
                // Idoso
                img.setAttribute('src', 'idosa-mulher.png')
            }
        }
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }



}
