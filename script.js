// // var listanome = ["iasmym", "beatriz","luisa"]





// // for(var index = 0; index < listanome.length; index++){
// //     document.write(`incrivel divas ${listanome[index]} <br>`)

// // }

// // // console.log(listanome[0])
// // // console.log(listanome[1])
// // // console.log(listanome[2])
// // document.write(`incrivel ${listanome[1]}`)


// var listaCompras = [];

// var produto = prompt("digite o nome do produto para adicionar na lista")

// listaCompras.push(produto);

// for(var i = 0; i < 4; i++) {
//     var produto = prompt("digite o nome do produto para adicioar na lista");
//     listaCompras.push(produto);
// }
// function exibirLista(){
//    console.log(listaCompras)
//    for(var i = 0; i < listaCompras.length; i++) {
//     document.write(`<li>${listaCompras[i]}</li>`)
//    }
// }
  

// exibirLista();

// // um sistema que crie uma lista de tarefas
// // peça ao usuario que digite as suas tarefas e insira elas 
// // na lista criada ao final do sistema
//     var listaTarefa =[]

//     for(var i = 0; i < 4; i++) {
//         var tarefa = prompt("digite o nome do produto para adicioar na lista");
//         listaTarefa.push(tarefa);
//     }
//     function

// var listaFilmes =[]

// for( var i = 0; i < 3; i ++){
//     var filmes =  prompt ("digite um filme:")
//     listaFilmes.push(filmes)

// }

// function exibirlistaFilmes(){
//     for(var i = 0; i < listaFilmes.length; i ++)
//         document.write(`<li> ${listaFilmes[i]} </li>`)
// }
// exibirlistaFilmes();




var listaProdutos = [
    { img: "smartv.png", titulo: "tv", descricao: "tv 50 polegas, samsung smartv luz de led", preco: 2000 },
    { img: "smartv.png", titulo: "tv led", descricao: "tv 40 polegas, samsung smartv luz de led", preco: 1500 },
    { img: "smartv.png", titulo: "tv sobre", descricao: "tv 20 polegas, samsung smartv luz de led", preco: 1000 }
]
    for (var i = 0; i < listaProdutos.length; i++) {
        // estou criando um item no html para CADA ELEMENTO/POSIÇÃO DO ARRAY
        document.write(`<li>
            <img src="${listaProdutos[i].img}">    
            <h1>${listaProdutos[i].titulo}</h1>
            <p>${listaProdutos[i].descricao} </p>
            <p style="color: gray; text-decoration: line-through;"> ${listaProdutos[i].preco*2}</p>
            <p style="color: green"> ${listaProdutos[i].preco}</p>
            <button style="background-color: green; color: white; border-radius: 5px; padding: 10px">compre agora</button>
            </li>`)
    }

exibirLista();


// var / funçoes / for / array (elementos compostos) / prompt / if
function exibirLista() {
    for (var i = 0; i < listaProdutos.length; i++) {
        // estou criando um item no html para CADA ELEMENTO/POSIÇÃO DO ARRAY
        document.write(`<li>
            <img src="${listaProdutos[i].img}">    
            <h1>${listaProdutos[i].titulo}</h1>
            <p>${listaProdutos[i].descricao} </p>
            <p style="color: gray; text-decoration: line-through;"> ${listaProdutos[i].preco*2}</p>
            <p style="color: green"> ${listaProdutos[i].preco}</p>
            <button style="background-color: green; color: white; border-radius: 5px; padding: 10px">compre agora</button>
            </li>`)
    }
}
exibirLista ();

// todo array
console.log(listaProdutos)
// [
//     {
//         "img": "smartv.png",
//         "titulo": "tv",
//         "descricao": "tv 50 polegas, samsung smartv luz de led",
//         "preco": 2000
//     },
//     {
//         "img": "smartv.png",
//         "titulo": "tv led",
//         "descricao": "tv 40 polegas, samsung smartv luz de led",
//         "preco": 1500
//     },
//     {
//         "img": "smartv.png",
//         "titulo": "tv sobre",
//         "descricao": "tv 20 polegas, samsung smartv luz de led",
//         "preco": 1000
//     }
// ]
// todo elemento selecionado
console.log(listaProdutos[0])
// {
//     "img": "smartv.png",
//     "titulo": "tv",
//     "descricao": "tv 50 polegas, samsung smartv luz de led",
//     "preco": 2000
// },
// apenas uma variavel do elemento selecionado
console.log(listaProdutos[2].titulo)
// "tv sobre"