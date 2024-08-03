const products = [
    {
        id:'1',
        name: 'IPhone 11',
        description:'descripcion del iphone 11',
        category:'celulares',
        price: '700',
        stock:'25'
    },
    {
        id:'2',
        name:'IPhone 12',
        description:'descripcion del iphone 12',
        category:'celulares',
        price: '850',
        stock: '10'
    },
    {
        id:'3',
        name:'IPhone 13',
        description:'descripcion del iphone 13',
        category:'celulares',
        price: '1000',
        stock:'18'
    },
    {
        id:'4',
        name:'Auriculares',
        description:'descripcion de auriculares',
        category:'accesorios',
        price: '150',
        stock: '43'
    },
    {
        id:'5',
        name:'IPad',
        description:'descripcion del ipad',
        category:'tablets',
        price: '1000',
        stock:'14'
    },
    {
        id:'6',
        name: 'MacBook',
        description:'descripcion de la Macbook',
        category:'notebooks',
        price: '1900',
        stock:'23'
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
