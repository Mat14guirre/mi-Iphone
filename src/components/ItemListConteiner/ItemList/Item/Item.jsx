import { Link } from "react-router-dom"

/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
// eslint-disable-next-line react/prop-types, no-unused-vars
const Item = ({product}) => {
    return (
        <> 
         <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {product.name}
                </h2>
            </header>
            <img  className="img-producto" src= {product.image} alt="" />
            <section>
                <p className="Precio">
                    Precio:$ {product.price}
                </p>
            </section>
            <footer className="ItemFooter" >
                <Link to= {`/product/${product.id}`} >
                    <button className="Button" >ver detalle </button>
                </Link>
            </footer>

        </article>
        </>
       
    )
}

export default Item