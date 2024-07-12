import CardHeader from "./CardHeader/CardHeader.jsx"
import CardBody from "./CardBody/CardBody.jsx"
import CardFooter from "./CardFooter/CardFooter.jsx"

const Card = () => {
    return (
        <>
        <div className="card">
            <CardHeader product={"IPhone 15 (producto)"}/>
            <CardBody description={"(caracteristicas)"}/>
            <CardFooter precio={"1500 usd (precio)"}/>
            <button>Agregar al carrito</button>
            <button>Comprar</button>
        </div>
        </>
    )
}

export default Card