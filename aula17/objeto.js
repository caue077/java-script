let amigo = {
    nome: "Jose",
    sexo: "M",
    peso: 85.4,
    engordar(p=0){
        console.log('ENGORDOU');
        this.peso += p
    }

}
amigo.engordar(2.5)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`);
