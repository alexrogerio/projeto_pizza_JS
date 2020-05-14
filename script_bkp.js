let modalQt = 1;
let modalKey = 0;

// Listagem das pizzas
pizzaJson.map((item,index)=>{
    let pizzaItem = c('.models .pizza-item').cloneNode(true);

     //Preenchendo as div com as informações das pizzas
    pizzaItem.setAttribute('data-key', index);
    pizzaItem.querySelector('.pizza-item--img img').src = item.img;
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`;
    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;

    //Abrindo Modal para add a pizza no Carrinho
    pizzaItem.querySelector('a').addEventListener('click',(e)=>{
        e.preventDefault();
        let key = e.target.clo
    })

    c('.pizza-area').append(pizzaItem);
});