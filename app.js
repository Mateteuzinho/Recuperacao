//npx json-server --watch db.json
const url = 'http://localhost:3000/produtos'
fetch(url)
    .then((req) => req.json())
    .then((data) => mostraProdutos(data));

function mostraProdutos(produtos){
    const htmlProdutos = fts.map(
        (produto) =>`
        img`
    );
    document.getElementById('app').innerHTML = htmlProdutos;
}