import { useState } from "react";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ItemCount = ({stock,initial,onAdd} ) => {
    const navigate= useNavigate()
    const [qty, setQty] = useState (initial);
    const [itemAdded,setItemAdded]= useState(false)
    const increment = () => {
        if (qty < stock ){
            setQty (qty+1)
        }
    };

    const decrement = () => {
        if (qty > 1) {
            setQty (qty-1 )
        }
    };

    const handleAddToCart =()=>{
        onAdd(qty)
        setItemAdded(true)
    }


    const handleGoToCheckout = () =>{
        setItemAdded(false)
        navigate("/Carrito")
    }

    return (
        <>
        <div className="Counter">
            {itemAdded ?(
                <div>
                    <button className="Button" onClick={handleGoToCheckout}>
                        Comprar
                    </button>
                </div>
            ): (
                <>
                <div className="Controls">
                    <button className="Button" onClick={decrement} > - </button>
                    <h4 className="Number"> {qty} </h4>
                    <button className="Button" onClick={increment}> + </button>
                </div>

                <div>
                    <button className="Button" onClick={handleAddToCart}>
                        Agregar al carrito
                    </button>
                </div>
                </>
                
            )}
            

        </div>
        </>
        
    )

};   

export default ItemCount;