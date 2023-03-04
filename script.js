


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



