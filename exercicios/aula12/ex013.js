var agora = new Date()
var diaSem = agora.getDay()
/*
   0 = domingo
   1 = segunda
   2 = terça
   3 = quarta
   4 = quinta
   5 = sexta
   6 = sabado

*/


switch(diaSem) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda-Feira')
        break 
    case 2:
        console.log('Terça-Feira')
        break
    case 3:
        console.log('Quarta-Feira')
        break  
    case 4:
        console.log('Quinta-Feira')
        break
    case 5:
        console.log('Sexta-Feira')
        break   
    case 6:
        console.log('Sabado')
        break     
    default:
        console.log('[ERRO] Dia invalido!')          
}