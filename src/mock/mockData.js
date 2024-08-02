const products = [
    {
        id:'1',
        name: 'iphone 11',
        price: '700',
        stock:'25'
    },
    {
        id:'2',
        name:'iphone 12',
        price: '850',
        stock: '10'
    },
    {
        id:'3',
        name:'iphone 13',
        price: '1000',
        stock:'18'
    }
]

export const getProducts = () => {
    return new Promise ((resolve)=> {
        setTimeout(() => {
            resolve(products)
        }, 500);
    })
}

export const getProductById=(productId)=> {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products.find(prod=> prod.id === productId))
        },500)
    })
}
