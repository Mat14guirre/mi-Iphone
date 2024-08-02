import { useState,useEffect } from "react";
import { getProductById } from "../../mock/mockData";
import ItemDetail from '../ItemDetail/ItemDetail.jsx'

const ItemDetailConteiner = ()=> {
    const [product,setProduct] = useState(null)

    useEffect(() => {
        getProductById('1')
        .then(response=> {
            setProduct(response)
        })
        .catch(error=>{
            console.error(error)
        })
    },[])
    
    return(
        <>
        <div className="ItemDetailConteiner">
            <ItemDetail {...product}/>
        </div>
        </>
    )
}

export default ItemDetailConteiner