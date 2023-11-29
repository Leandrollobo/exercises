/*
Usando os conceitos aprendidos nesse módulo, e sem alterar o arquivo index.html,
adicione um título simples ao site com o id 'titulo',
e
um elemento que represente um produto à venda.
O produto precisa incluir pelo menos o nome, a descrição e o preço. Pode incluir outros "elementos filhos" se achar necessário como, por exemplo, uma imagem. Procure usar o método simples e o método complexo, ensinados neste tópico.
*/

//Cria um elemento HTML em JS para ser usado no DOM
let elementoTitulo = document.createElement("h1");

//Por meio do .(dotnotation) acessamos as propriedades do elemento
//e usando .id podemos atribuir um id ao nosso novo elemento criado
elementoTitulo.id = "titulo";
//usando a propriedade .innerText podemos popular inserindo um
//texto em nosso elemento
elementoTitulo.innerText = "Titulo do site feito em JS";
console.log(elementoTitulo);
//Com o elemento criado, populado e manipulado, podemos adicioná-lo ao nosso site.
//Para fazer isso, precisamos capturar o seu elemento pai via DOM
//e salvá-lo em uma variável.
let capturarandoElementoPai = document.querySelector("body");
console.log(capturarandoElementoPai);

//Neste exemplo basico estamos pegando todo elemento body pois o html esta vazio, !!!sempre pegue o elemento PAI!!! Com o elemento body salvo na variável capturandoElementoPai, podemos chamar essa variável e usar o método appendChild() para adicionar elementos nele.
capturarandoElementoPai.appendChild(elementoTitulo);

//criando um elemento que represente um produto à venda.(uso para situações mais complexas).
let produtoVenda = document.createElement("div"); //criado uma div

//Usamos a propriedade innerHTML para inserir todo o conteúdo HTML deste produto nesta div:

produtoVenda.innerHTML = `
<h2 class="produto-titulo">Computador XYZ</h2>
<p class="descricao-produto">Descrição:
Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos voluptatum sunt porro eos veritatis possimus provident dolore vero molestias saepe laborum odit eveniet, quod architecto officiis neque eaque atque officia? </p>
<h3 class="preco-produto">R$3000,00</h3>
`;

capturarandoElementoPai.appendChild(produtoVenda);
