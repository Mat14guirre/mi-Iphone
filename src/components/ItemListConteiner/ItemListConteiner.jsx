import ItemList from "./ItemList/ItemList.jsx"

const ItemListConteiner = ({greeting}) => {
    return (
        <>
        <div className="itemListConteiner">
            <h1 className="titleWelcome"> {greeting} </h1>
            <ItemList/>
        </div>
        </>
    )
}
export default ItemListConteiner