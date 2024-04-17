let num = window.document.getElementById('num')
let resNum = window.document.getElementById('resNum')
let res = window.document.getElementById('res')
let valores = []

function Adicionar(){
    if (isNum(num.value) && !inLista(num.value, valores)){
       valores.push(Number(num.value))
       let item = document.createElement('option')
       item.text += `Valor ${num.value} adicionado`
       resNum.appendChild(item)
       res.innerHTML = ''
    } else {
        window.alert ('Valor invalido ou já encontrado na lista')
    }
    num.value = ''
    num.focus()
}

function isNum(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l ){
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}
function Finalizar() {
    if (valores.length == 0){
        window.alert('Adicione valores antes de finalizar')
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior) {
                maior = valores[pos]
            }
            if (valores[pos] < menor) {
                menor = valores[pos]
            }
            
        }
        media = soma / total

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${total} cadastrado</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>A soma de todos os valores informado foi ${soma}</p>`
        res.innerHTML += `<p>A media de todos os valores informado foi ${media}</p>`
    }
}