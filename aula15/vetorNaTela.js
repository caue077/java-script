/* let num = [5, 8, 2, 9, 3]
num.push(7)
num.sort()
for (let c = 0; c < num.length; c++) {
    console.log(`posicao ${c} tem o valor ${num[c]}`)
}
 */

let num = [5, 8, 2, 9, 3]
for (let pos in num) {
    console.log(`posicao ${pos} tem o valor ${num[pos]}`)
}