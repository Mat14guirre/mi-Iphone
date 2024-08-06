/* eslint-disable react/prop-types */
import Item from '../ItemList/Item/Item.jsx'

const ItemList = ({products})=> {
    return (
        <>
        <div className="ListGroup">
            {products.map((product)=>{
                return <Item key={product.id} product={product} />
            })}
        </div>
       </>
    ) 
}

export default ItemList