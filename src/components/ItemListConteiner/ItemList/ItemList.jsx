import { categories } from "../../../mock/mockData"

const ItemList = ()=> {
    return (
        <>
        <div className="button-conteiner-categories">
        <button className="itemList"> {categories[1]} </button>
        <button className="itemList"> {categories[2]} </button>
        <button className="itemList"> {categories[3]} </button>
        <button className="itemList"> {categories[4]} </button>
        <button className="itemList"> {categories[0]} </button>
        <button className="itemList"> {categories[5]} </button>
        </div>
       
        </>
    ) 
}

export default ItemList