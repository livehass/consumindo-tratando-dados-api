async function buscaEndereco(cep){
    var mensagemErro = document.getElementById('erro'); 
    mensagemErro.innerHTML = "";
    try {
        var consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        var consultaCepConvertida = await consultaCep.json();
        if (consultaCepConvertida.erro) {
            throw Error('Cep não existente!');
        }
        var cidade = document.getElementById('cidade');
        cidade.value = consultaCepConvertida.localidade;

        var logradouro = document.getElementById('endereco');
        logradouro.value = consultaCepConvertida.logradouro;

        var estado = document.getElementById('estado');
        estado.value = consultaCepConvertida.localidade;

        var bairro = document.getElementById('bairro');
        bairro.value = consultaCepConvertida.bairro;


        console.log(consultaCepConvertida);
        return consultaCepConvertida;
    } catch (erro) {
        mensagemErro.innerHTML = `<p>Cep inválido. Tente novamente!</p>`
           
    }        
}
var cep = document.getElementById('cep');
cep.addEventListener('focusout', ()=> buscaEndereco(cep.value));
buscaEndereco();




// let ceps = ['01001000', '01001001'];
// let conjuntoCeps = ceps.map(valores => buscaEndereco(valores));
// Promise.all(conjuntoCeps).then(respostas => console.log(respostas));

/* .then( resposta => resposta.json())
 .then( r => { 
    
     if(r.erro){
         throw Error('esse cep não existe')
     }else
    
     console.log(r)})
 .catch(erro => console.log(erro))
 .finally(mensagem => console.log('processamento concluido'));*/ 

