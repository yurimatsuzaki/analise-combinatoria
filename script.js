function calcular() {
    let num1 = document.getElementById('txtnum1')
    let num2 = document.getElementById('txtnum2')
    let res = document.getElementById('result')
    let FatN = 1

    for(let cont = Number(num1.value); cont > 1; cont--){
        FatN *= cont
    }

    if (num2.value.length == 0 && num1.value.length != 0) {
        res.innerHTML=`Permutação: ${FatN}<br>`

        let FatCir = 1
        for(let cont = Number(num1.value) - 1; cont > 1; cont--){
            FatCir *= cont
        }
        res.innerHTML+=`Permutação circular: ${FatCir}`
    }
    else{
        let FatK = 1
        for(let cont = Number(num2.value); cont > 1; cont--){
            FatK *= cont
        }

        let FatNK = 1
        for(let cont = Number(num1.value) - Number(num2.value); cont > 1; cont--){
            FatNK *= cont
        }

        let FatCir = 1
        for(let cont = Number(num1.value) - 1; cont > 1; cont--){
            FatCir *= cont
        }

        let arranjo = FatN/FatNK
        let combinacao = FatN/(FatK*FatNK)

        res.innerHTML=`Arranjo: ${arranjo}<br>`
        res.innerHTML+=`Combinação: ${combinacao}<br>`
        res.innerHTML+=`Permutação: ${FatN}`
        res.innerHTML+=`Permutação circular: ${FatCir}`
    }
}

function multiplicar() {
    let n1 = document.getElementById('txtfat1')
    let n2 = document.getElementById('txtfat2')
    let n3 = document.getElementById('txtfat3')
    let produto = document.getElementById('produto')
    let result

    if (n1.value.length == 0) {
        result = Number(n2.value)*Number(n3.value)
    } else if(n2.value.length == 0){
        result = Number(n1.value)*Number(n3.value)
    } else if(n3.value.length == 0){
        result = Number(n1.value)*Number(n2.value)
    }

    produto.innerHTML=`${result}`
}