async function buscaEndereco(){

var consultaCep = await fetch('https://viacep.com.br/ws/01001250/json/')

}

console.log(consultaCep);






// .then( resposta => resposta.json())
// .then( r => { 
    
//     if(r.erro){
//         throw Error('esse cep não existe')
//     }else
    
//     console.log(r)})
// .catch(erro => console.log(erro))
// .finally(mensagem => console.log('processamento concluido'));

