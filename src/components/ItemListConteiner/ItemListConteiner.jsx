import { useState,useEffect } from "react"
import {collection,getDocs,query,where} from "firebase/firestore" 
import { db } from "../../firebase/dbConnection.js"
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
        let productsCollection=collection(db,"productos")

        if(categoryId){
            productsCollection = query(productsCollection,where("category","array-contains",categoryId))
        }
        getDocs(productsCollection)
            .then(({docs})=>{
                const prodFromDocs= docs.map((doc)=>({
                    id:doc.id,
                    ...doc.data()
                }))
                setProducts(prodFromDocs)
                setLoading(false)
            })
            .catch((error)=>{
                console.error("error getting documents: ",error)
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