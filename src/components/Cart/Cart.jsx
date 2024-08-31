import { Table } from "react-bootstrap"
import { useCartContext } from "../../context/CartContext"
import { useState } from "react"
import { addDoc, collection } from "firebase/firestore"
import { db } from "../../firebase/dbConnection"
import swal from 'sweetalert';

const Cart= ()=>{
    const{cart,total,removeItem,clearCart}= useCartContext()

    const [formData,setFormData]= useState({name:"",tel:"",email:""})

    const handleRemoveItem= (id,price,qty)=>{
        removeItem(id,price,qty)
    }
    const handleClearCart=()=>{
        clearCart()
    }

    const handleOnChange = (e)=>{
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSaveCart=()=>{
        console.log("Saving in database")
        console.log("formData",formData)
        console.log("cart", cart)

        const orderCollection= collection(db,"orders")
        const newOrder={
            buyer:formData,
            items: cart,
            date: new Date(),
            total:total
        }

        addDoc(orderCollection,newOrder)
        .then((doc)=>{
            swal("Gracias por tu compra",( "codigo de orden: " + doc.id), "success");
            console.log("order saved with id: " + doc.id)
            clearCart()
            setFormData({name:"", tel:"",email:""})
        })
        .catch((error)=>{
            console.error("error adding document: " , error)
        })
    }
    return (
        <>
        <Table striped bordered hover>
          <thead className="tabla">
            <tr className="tabla1">
              <th>#</th>
              <th className="tabla2">Nombre</th>
              <th className="tabla2">Precio</th>
              <th className="tabla2">Cantidad</th>
            </tr>
          </thead>
          <tbody className="tabla3">
            {cart?.map(({id,name,price,qty},index)=>{
                return(
                    <tr className="tabla1" key={index}>
                        <td className="tabla4"> {id} </td>
                        <td className="tabla4"> {name} </td>
                        <td className="tabla4"> {price} </td>
                        <td className="tabla4"> {qty} </td>
                        <td className="tabla4">
                            <button onClick={()=>handleRemoveItem(id,price,qty)}>
                                Remover item
                            </button>
                        </td>
                    </tr>
                )
            })}
            <tr className="tabla1">
                <td className="tabla5" colSpan={4}>Precio total</td>
                <td className="tabla5">$ {total} </td>
            </tr>
          </tbody>
        </Table>
        <button className="Button" onClick={handleClearCart}>Borrar Carrito</button>

        <div>
            <input className="finalizar-form" type="text" name="name" id="name" placeholder="ingrese su nombre" onChange={(e)=>handleOnChange(e)} />
            <input className="finalizar-form" type="number" name="tel" id="tel" placeholder="ingrese su telefono" onChange={(e)=>handleOnChange(e)} />
            <input className="finalizar-form" type="email" name="email" id="email" placeholder="ingrese su email" onChange={(e)=>handleOnChange(e)} />
            <button className="Button" onClick={handleSaveCart}> Finalizar compra</button>
            
        </div>
        </>
    )    
}

export default Cart