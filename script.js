var consultaCep = fetch('https://viacep.com.br/ws/01001000/json/')
.then( resposta => resposta.json())
.then( r => { 
    
    if(r.erro){
        throw error('esse cep não existe')
    }else
    
    console.log(r)})
.catch(erro => console.log(erro));

console.log(consultaCep)