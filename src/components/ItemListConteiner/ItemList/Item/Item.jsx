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
            <section>
                <p className="Precio">
                    Precio:$ {product.price}
                </p>
            </section>
            <footer className="ItemFooter" >
                <button className="Option">ver detalle</button>
            </footer>

        </article>
        </>
       
    )
}

export default Item