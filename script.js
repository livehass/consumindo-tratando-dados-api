async function buscaEndereco(cep){
    try {
        var consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        var consultaCepConvertida = await consultaCep.json();
        if (consultaCepConvertida.erro) {
            throw  Error('Cep não existente')
        }
        console.log(consultaCepConvertida);
        return consultaCepConvertida;
    }catch (erro) {
        console.log(erro)   
    }        
}
let ceps = ['01001000', '01001001']
let conjuntoCeps = ceps.map(valores => buscaEndereco(valores));
buscaEndereco();

Promise.all(conjuntoCeps).then(respostas => console.log(respostas));


console.log('teste', conjuntoCeps)
/* .then( resposta => resposta.json())
 .then( r => { 
    
     if(r.erro){
         throw Error('esse cep não existe')
     }else
    
     console.log(r)})
 .catch(erro => console.log(erro))
 .finally(mensagem => console.log('processamento concluido'));*/ 

