import { useState,useEffect } from "react" 
import { getProducts } from "../fetchData/fetchData.js"
import ItemList from "./ItemList/ItemList.jsx"
import { useParams } from "react-router-dom"
import { Spinner } from "../spinner/Spinner.jsx"

// eslint-disable-next-line react/prop-types
const ItemListConteiner = ({greeting}) => {
    const [products,setProducts] = useState([])

    const{categoryId}=useParams()

    const [loading,setLoading]  = useState (true)
    
    useEffect(()=> {
        setLoading(true)
        getProducts(categoryId)
        .then((response)=> {
            setProducts(response)
        })
        .catch ((err) => {
            console.log(err)
        })
        .finally(()=>{
            setLoading(false)
        })
        
    }, [categoryId])

    return (
        <>
        <div className="itemListConteiner">
            <h1 className="titleWelcome"> {greeting} </h1>
            {loading 
            ? <Spinner/>
        :<ItemList products={products} />}
            
        </div>
        </>
    )
}
export default ItemListConteiner