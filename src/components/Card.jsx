import { Link } from "react-router-dom"
import useGlobalReducer from "../hooks/useGlobalReducer";

export const PokeCard = ({ name, url }) => {
    const { store, dispatch } = useGlobalReducer();
    

    let aux = url.split('/')
    let id = aux[6]

    return (
        <div className="col">
            <div className="card" >
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`} alt={name} />
                <h3 className="card-title text-capitalize">{name}</h3>
                <Link className="btn btn-primary" to={'/details/' + id}>Ver más</Link>
                <button
                    className="btn btn-warning"
                    onClick={() => dispatch({ type: "add_favorite", payload: { id, name } })}
                >
                    Favoritos
                </button>
            </div>
        </div>
    )
}