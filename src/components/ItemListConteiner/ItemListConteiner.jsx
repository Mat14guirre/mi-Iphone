import { useState,useEffect } from "react" 
import {getProducts} from '../../mock/mockData.js'
import ItemList from "./ItemList/ItemList.jsx"


// eslint-disable-next-line react/prop-types
const ItemListConteiner = ({greeting}) => {
    const [products,setProducts] = useState([])
    
    useEffect(()=> {
        getProducts()
        .then(response=> {
            setProducts(response)
        })
        .catch (error => {
            console.error(error)
        })
    }, [])

    return (
        <>
        <div className="itemListConteiner">
            <h1 className="titleWelcome"> {greeting} </h1>
            <ItemList products={products} />
        </div>
        </>
    )
}
export default ItemListConteiner