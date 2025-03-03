let valores = [8,20,15,35,54]
valores.sort()
// console.log(valores)
/*
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])
*/

// OPÇÃO 1
/*for (pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem os valores ${valores[pos]}`)
} */


// OPÇÃO 2 - MAIS SIMPLES
for (let pos in valores) {
    console.log(`A posição ${pos} tem os valores ${valores[pos]}`)
}