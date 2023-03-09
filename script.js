class Carro {
  constructor(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    
    // define a propriedade cor
    Object.defineProperty(this, 'cor', {
      enumerable: true,
      configurable: true,
      set: function(value) {
        this._cor = value;
      },
      get: function() {
        return this._cor;
      }
    });
  }
}

// criando uma instância de Carro e definindo a cor
const meuCarro = new Carro('Toyota', 'Corolla', 2020);
meuCarro.cor = 'vermelho';

console.log(meuCarro); // { marca: 'Toyota', modelo: 'Corolla', ano: 2020, _cor: 'vermelho' }
console.log(meuCarro.cor); // 'vermelh














// class Pessoa{
//   constructor(nome,n1,n2){
//     this.nome = nome;
//     this.n1 = n1;
//     this.n2= n2;
   
//   }
//   mediaNotas(){
//     return (this.n1 + this.n2)/2
//   }
// }

// novaPessoa = new Pessoa("Fabiano",5,9)
// console.log(novaPessoa.nome)
// console.log(novaPessoa.mediaNotas())





// function calcMedia(){

//   return (this.notas[0] + this.notas[1])/2;
//  }

// let aluno = {
//    nome :"Fabiano",
//    notas: [8, 9],
//    media : calcMedia,
   
// };


// let aluno2 = {
//   nome :"Fabio",
//   notas: [8, 5],
//   media : calcMedia,
  
// };


// console.log(aluno.nome)
// console.log(aluno.media())

// console.log(aluno2.nome)
// console.log(aluno2.media())
















//class Pessoa {
//     constructor(nome, cidade) {
//       this.nome = nome;
//       this.cidade = cidade;
//     }
//     get nome() {
//         return this._nome;
//     }
//     set nome(value){
//       this._nome = value
//     }

//     get cidade() {
//       return this._cidade;
//     }
  
//     set cidade(value) {
//       this._cidade = value;
//     }

//   }
  
//   let newPerson = new Pessoa("Fernanda", "içara");

// console.log(newPerson)


// class Carro{
//     constructor(nome){
//         this.nome = nome
//         this.velecidade = 100
//     }

//     acelerar(){
//         if(this.velecidade >= 100) return
//         this.velecidade++;
//     }
//     freiar(){
//         if(this.velecidade <= 0) return
//         this.velecidade--;
//     }

// }

// let novoCar = new Carro("Fusca");

// for(let i = 0; i < 0; i++){
//      novoCar.acelerar()
// }

// console.log(novoCar)














// class Pessoa{ 
//   constructor(nome,sobrenome){
//     this.nome = nome;
//     this.sobrenome = sobrenome;
//   }
//   falar(){
//   console.log(`${this.nome} está falando`)
//   }
//   comer(){
//   console.log(`${this.nome} está comendo`)
//   }
//   beber(){
//   console.log(`${this.nome} está bebendo`)
//   }
// }

// const p1 = new Pessoa("Fabiano","Fregnani")
// const p2 = new Pessoa("Fernanda","Fregnani")
// const p3 = new Pessoa("Fabricio","Fregnani")

// console.log(p1);
// console.log(p2);
// console.log(p3);























































// const inputTarefa = document.querySelector('.input-tarefa');
// const btnTarefa = document.querySelector('.btn-tarefa');
// const tarefas = document.querySelector('.tarefas')

// inputTarefa.addEventListener('keypress', function(e) {
//    if(e.keyCode === 13) {
//     if(!inputTarefa) return;
//     criaTarefa(inputTarefa.value);
//    }
// });

// function limpaInput(){
//     inputTarefa.value = ""
//     inputTarefa.focus();
    
// };

// function criaBotaoApagar(li){
//     li.innerText += "  ";
//     const botaoApagar = document.createElement('button');
//     botaoApagar.innerText = 'Apagar'
//     li.appendChild(botaoApagar);
//     botaoApagar.setAttribute('class', 'apagar')
//     botaoApagar.setAttribute('title', 'Apagar esta tarefa')
// }

// function criaLi(){
//     const li = document.createElement('li'); 
//     return li;
// }

// function criaTarefa(textoInput){
//  const li= criaLi()
//  li.innerText = textoInput;
//  tarefas.appendChild(li);
//  limpaInput();
//  criaBotaoApagar(li);
//  salvarTarefas();
// };

// btnTarefa.addEventListener('click' ,function (){
// if (!inputTarefa.value) return; 

// criaTarefa(inputTarefa.value)
// });

// document.addEventListener('click', function(e) {
//     const el = e.target;
//    if (el.classList.contains('apagar')) {
//     el.parentElement.remove();
//     salvarTarefas()
//    }
// });

// function salvarTarefas(){
//     const liTarefas = tarefas.querySelectorAll('li');
//     const listaDeTarefas = [];
// for (let tarefa of liTarefas){
//     let tarefaTexto = tarefa.innerText;
//     tarefaTexto = tarefaTexto.replace('Apagar', '').trim()
//     listaDeTarefas.push(tarefaTexto)
// }
// const tarefasJSON = JSON.stringify(listaDeTarefas)
// localStorage.setItem('tarefas', tarefasJSON);
// console.log(tarefasJSON)
// }

// function adicionaTarefasSalvas(){
//  const tarefas = localStorage.getItem('tarefas');
//  const listaDeTarefas = JSON.parse(tarefas);

// for(let tarefa of listaDeTarefas){
//     criaTarefa(tarefa);
// }

//  console.log(listaDeTarefas)
// }

// adicionaTarefasSalvas()



