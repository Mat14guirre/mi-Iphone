import cart from "./assets/cart.svg"
const CartWidget = () => {
    return (
        <>
        <button className="cartConteiner">
            <img className='cart' src= {cart} alt="cart-widget" />
            0
        </button>
        </>
    )
}
export default CartWidget

