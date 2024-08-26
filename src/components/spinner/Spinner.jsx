import spinner from "./spinner.gif"

export const Spinner = ()=> {
    return (
        <div className="image-spinner">
            <img 
                src= {spinner}
                alt="Cargando..."
                style={{width:"150px", margin:"auto", display:"block"}} />
            <p>Cargando...</p>    
        </div>
    )
}