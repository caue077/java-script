let num = [5, 8, 2, 9, 3]
num.push(7)
num.sort()
console.log(num);
console.log(`Nosso vetor tem ${num.length} elementos`);
console.log(`O primeiro valor do vetor é ${num[0]}`);

let pos= num.indexOf(3)
if (pos == -1){
    console.log('Valor nao encontrado');
    
} else {
    console.log(`O valor 8 ta na posicao ${pos}`);
}


