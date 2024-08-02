/* eslint-disable no-undef */
// eslint-disable-next-line react/prop-types, no-unused-vars
const Item = ({id,name,price,stock}) => {
    return (
        <> 
         <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <section>
                <p className="Price">
                    Precio: ${price}
                </p>
                <p className="Stock">
                    Stock disponible: {stock}
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