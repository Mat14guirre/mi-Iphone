/* eslint-disable react/prop-types */
import Item from '../ItemList/Item/Item.jsx'

// eslint-disable-next-line react/prop-types
const ItemList = ({products})=> {
    return (
        <>
        <div className="ListGroup">
            {products.map (prod => <Item key={prod.id} {...prod}/>)}
        </div>
       </>
    ) 
}

export default ItemList