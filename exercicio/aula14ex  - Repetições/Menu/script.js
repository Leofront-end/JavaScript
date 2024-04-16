function Enviar() {
    var num = window.document.getElementById('Num')
    var res = window.document.getElementById('res')
    var n = Number(num.value)
    res.innerHTML = ''
    if (num.value.length == 0) {
        res.innerHTML += `Escolha 1,2 ou 3`
    } else {
        switch (n) {
            case 1:
                for ( var c = 1; c<=10 ;c++ ) {
                    res.innerHTML += `${c}..`
                }
                break;
            case 2:
                for (var c = 10 ; c >= 0 ; c--) {
                    res.innerHTML += `${c}..`
                }
                break;
            case 3:
                res.innerHTML += `Saindo...`
                break;
        }
    }
    
}