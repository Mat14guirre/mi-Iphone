import { useState } from "react";

const ItemCount = () => {

    const [qty, setQty] = useState (1);
    const handleClick = (op) => {
        op=== "-" ? clickMenos() : clickMas();
    };

    const clickMenos = ()=> {
        if (qty ===1) {
            alert ("No se puede elegir menos de una unidad");
            return;
        }
        setQty (qty - 1);
    };

    const clickMas = () =>{
        setQty (qty + 1);
    }
    return (
        <div>
            <button onClick={ ()=> handleClick('-') } >-</button>
            <span> {qty} </span>
            <button onClick={ ()=> handleClick('+') }>+</button>
        </div>
    )
}

export default ItemCount;