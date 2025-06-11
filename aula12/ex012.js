var idade = 22
console.log(`Você tem ${idade} anos`)
if (idade < 16) {
    console.log('NAO VOTA!')
} else if (idade < 18 || idade > 65) {
        console.log('VOTO OPCIONAL')
} else {
    console.log('VOTO OBRIGATORIO')
}
