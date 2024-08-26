import ItemCount from "../ItemCount/ItemCount.jsx";
import { useCartContext } from "../../context/CartContext.jsx";

// eslint-disable-next-line react/prop-types, no-unused-vars
const ItemDetail= ({id,name,category,description,price,stock,image}) => {
    const {addToCart} = useCartContext()

    const onAdd = (qty) => {
        console.log (`se agregaron ${qty} productos al carrito`)
        const item = {id,name,description,price}
        addToCart (item,qty)
    }


    return(
        <>
        
         <article className="CardItem-detail">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <section>
                <img className="image-detail" src= {image} alt="" />
                <p className="info">
                    Categoria: {category}
                </p>
                <p className="Precio"> 
                    Precio: ${price}
                </p>
                <p className="Info">
                    Descripcion: {description}
                </p>
                <p className="info">
                    Stock= {stock}
                </p>
            </section>
            <footer className="ItemFooter" >
            <ItemCount initial={1} stock={10} onAdd= {onAdd} />
            </footer>

        </article>
        </>
    )
}

export default ItemDetail