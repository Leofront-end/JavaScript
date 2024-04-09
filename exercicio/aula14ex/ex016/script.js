function Contar() {
    var inicio = window.document.getElementById(`i`)
    var fim = window.document.getElementById(`f`)
    var passo = window.document.getElementById(`p`)
    var res = window.document.getElementById(`res`)
    res.innerHTML = `<p>Contando:</p>`
    for (var c = inicio;c <= fim ; passo) {
        res.innerHTML += ` ${c} `
    }
}