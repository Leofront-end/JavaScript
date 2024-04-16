function Enviar() {
    var num = window.document.getElementById('numero')
    var res = window.document.getElementById('res')
    if (num.value.length == 0){
        window.alert(`VAZIO`)
    } else {
        var n = Number(num.value)
        var c = 1
        res.innerHTML = ''
        while ( c <= 10 ){
            var item = document.createElement('option')
            var resposta = c * n
            item.text += `${n} * ${c} = ${resposta}`
            item.value = `res${c}`
            res.appendChild(item)
            c++
        }
    }
    
}