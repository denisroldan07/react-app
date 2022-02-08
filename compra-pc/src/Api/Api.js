const products = 
[
    {
        id:1,
        name:'Jabon',
        description:'Jabon tocador',
        stock:10
    },
    {
        id:2,
        name:'Shampoo',
        description:'Sin colorante',
        stock:10
    },
    {
        id:3,
        name:'Esponja',
        description:'Esponja para baño',
        stock:10
    },
];

const miPromesa = new Promise(function(resolve,reject)
{
    setTimeout(function()
    {
        resolve(products);
    },1000);
});

function getProducts(){
    return miPromesa;
}

export {
    getProducts,
}