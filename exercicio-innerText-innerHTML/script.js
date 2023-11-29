let h1 = document.getElementById("titulo");
console.log(h1);

let ul = document.querySelector("ul");
console.log(ul);

let a = document.getElementById("a");
console.log(a);

let ol = document.getElementById("lista-ordenada");
console.log(ol);

h1.innerText = "Bem vindo em Javascript";

a.innerText = "Links disponíveis";

ul.innerHTML = `
<li> Item 1 </li>
<li> Item 2 </li>
<li> Item 3 </li>
`;

ol.innerHTML = `
<li><a href="www.google.com.br">Google</a></li>
<li><a href="www.facebook.com">Facebook</a></li>
<li><a href="www.instagram.com">Instagram</a></li>
`;
