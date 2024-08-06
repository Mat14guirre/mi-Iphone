import { NavLink } from "react-router-dom"
import cart from "./assets/cart.svg"
const CartWidget = () => {
    return (
        <>
        <NavLink className="cartConteiner">
            <img className='cart' src= {cart} alt="cart-widget" />
            0
        </NavLink>
        </>
    )
}
export default CartWidget

