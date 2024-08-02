import ItemCount from "../ItemCount/ItemCount.jsx";

// eslint-disable-next-line react/prop-types, no-unused-vars
const ItemDetail= ({id,name,img,category,description,price,stock}) => {
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
                <p className="Info">
                    Precio: ${price}
                </p>
                <p className="Info">
                    Descripcion: {description}
                </p>
            </section>
            <footer className="ItemFooter" >
            <ItemCount initial={1} stock={10} onAdd= { (qty) => console.log ("cantidad agregada",qty)}/>
            </footer>

        </article>
        </>
    )
}

export default ItemDetail