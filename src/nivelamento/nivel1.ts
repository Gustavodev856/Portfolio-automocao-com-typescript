type produto = {'product': string, 'valor': number}

let produtos: produto = {
    product: 'Sabonete' ,
    valor: 10     
}


function verificarPreco(produtoAtual: produto) {
    const resultado = produtos.valor > 5 ? 
    console.log(`O ${produtos.product}, esta no valor de R$ ${produtos.valor} reais e esta muito caro`): 
    console.log(`O ${produtos.product}, esta no valor de R$ ${produtos.valor} reais e esta muito barato`)
    console.log(resultado)


    
}

verificarPreco(produtos)