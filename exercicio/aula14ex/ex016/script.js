function Contar() {
    let inicio = window.document.getElementById(`i`)
    let fim = window.document.getElementById(`f`)
    let passo= window.document.getElementById(`p`)
    let res = window.document.getElementById(`res`)
    
    
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert(`[ERRO] Faltam dados`)
        res.innerHTML = `Impossivel contar`
    } else {
        res.innerHTML = `<p>Contando:</p>`
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0){
            window.alert('Passo Invalido! Considerando passo 1')
            p = 1
        }

        if (i < f){
            for (let c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{1F449}`
            }
        } else {
            for (let c = i; c >= f ; c -= p){
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`

        
    }
}