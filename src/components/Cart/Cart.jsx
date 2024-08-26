import { Table } from "react-bootstrap"
import { useCartContext } from "../../context/CartContext"

const Cart= ()=>{
    const{cart,total,removeItem,clearCart}= useCartContext()

    const handleRemoveItem= (id,price,qty)=>{
        removeItem(id,price,qty)
    }
    const handleClearCart=()=>{
        clearCart()
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
        </>
    )    
}

export default Cart