function contar() {
  let inicio = document.getElementById("txti");
  let fim = document.getElementById("txtf");
  let passo = document.getElementById("txtp");
  let result = document.getElementById("result");

  if (
    inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
    result.innerHTML = "Impossivel contar";
    window.alert("Erro PREENCHA OS CAMPOS PARA PROSSEGUIR!");
  } else {
    result.innerHTML = "Contando: <br>";
    let i = Number(inicio.value);
    let f = Number(fim.value);
    let p = Number(passo.value);
    if (p <= 0) {
      window.alert("Passo invalido! Considerando passo 1");
      p = 1;
    }
    if (i < f) {
      // Contagem crescente
      for (let c = i; c <= f; c += p) {
        result.innerHTML += ` ${c} \u{1F449}`;
      }
    } else {
      // contagem regressiva
      for (let c = i; c >= f; c -= p) {
        result.innerHTML += ` ${c} \u{1F449}`;
      }
    }
    result.innerHTML += `\u{1F3C1}`;
  }
}
