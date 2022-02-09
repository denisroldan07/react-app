import products from './producto.json';

const miPromesa = new Promise(function(resolve,reject)
{
    setTimeout(function()
    {
        resolve(products);
    },2000);
});

function getProducts(){
    return miPromesa;
}

export {
    getProducts,
}