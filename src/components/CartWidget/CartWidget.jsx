import { NavLink } from "react-router-dom"
import cart from "./assets/cart.svg"
import { useCartContext } from "../../context/CartContext" 

const CartWidget = () => {
    const {qtyItems} = useCartContext()
    return (
        <>
        <NavLink className="cartConteiner">
            <img className='cart' src= {cart} alt="cart-widget" />
            {qtyItems}
        </NavLink>
        </>
    )
}
export default CartWidget

