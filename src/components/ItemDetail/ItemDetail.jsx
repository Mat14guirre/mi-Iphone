import ItemCount from "../ItemCount/ItemCount.jsx";

// eslint-disable-next-line react/prop-types, no-unused-vars
const ItemDetail= ({name,category,description,price,stock}) => {
    return(
        <>
         <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <section>
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
            <ItemCount initial={1} stock={10} onAdd= { (qty) => console.log ('agregado al carrito',qty)}/>
            </footer>

        </article>
        </>
    )
}

export default ItemDetail