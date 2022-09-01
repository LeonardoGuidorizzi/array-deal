// retorna a lista de cidades pelo estado
const getCidades = function(siglaEstado){
    let sigla = siglaEstado
    let listCidades = []
    let erro = true

    //
    if (typeof(sigla) != 'undefined'){
        if(sigla != ''&& sigla.length == 2){
// percorrer o array de cidades para validar a sigla do estado 
            cidades.forEach(item => {
                // localiza a sigla do estado dentro do array de ciadades
                if(item.sigla.indexOf(sigla.toUpperCase())==0)
                {
                    //percorre o array da chave dentro do estado que foi encontrado
                item.cidades.forEach(itemCidade => {
                        listCidades.push(itemCidade.nome)
                        
                })   
                }
            });
        }
    }
    return listCidades
}
console.table(getCidades('AC'))