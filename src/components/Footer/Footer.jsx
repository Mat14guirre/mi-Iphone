import { items } from "../../mock/mockData"
import { db } from "../../firebase/dbConnection"
import {collection,addDoc} from "firebase/firestore"

const Footer=()=>{
    const addProducts=()=>{
        const productsCollection=collection(db,"productos")
        items.forEach((item)=>{
            addDoc(productsCollection,item)
            .then(doc=>{
                console.log("producto agregado con ID: ", doc.id)
            })
            .catch(error=>{
                console.error("error al agregar el producto: ",error)
            })
        })
    }
    return(
        <>
        <footer>
            <button onClick={addProducts}>agregar productos a base de datos</button>
        </footer>
        </>
    )
}
export default Footer