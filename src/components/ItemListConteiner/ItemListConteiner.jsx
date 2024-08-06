import { useState,useEffect } from "react" 
import { getProducts } from "../fetchData/fetchData.js"
import ItemList from "./ItemList/ItemList.jsx"
import { useParams } from "react-router-dom"


// eslint-disable-next-line react/prop-types
const ItemListConteiner = ({greeting}) => {
    const [products,setProducts] = useState([])

    const{categoryId}=useParams()
    
    useEffect(()=> {
        getProducts(categoryId)
        .then((response)=> {
            setProducts(response)
        })
        .catch ((err) => {
            console.log(err)
        })
        
    }, [categoryId])

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