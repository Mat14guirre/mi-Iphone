import { useState } from "react";

// eslint-disable-next-line react/prop-types
const ItemCount = ({stock,initial,onAdd} ) => {

    const [qty, setQty] = useState (initial);

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

    return (
        <div className="Counter">

            <div className="Controls">
                <button className="Button" onClick={decrement} > - </button>
                <h4 className="Number"> {qty} </h4>
                <button className="Button" onClick={increment}> + </button>
            </div>
            <div>
                <button className="Button" onClick={ () => onAdd(qty) } disabled ={!stock}>
                    Agregar al carrito
                </button>
            </div>

        </div>
    )

};   

export default ItemCount;