import { useEffect } from "react";
import { useParams } from "react-router-dom";
import pokeApiServices from "../services/PokeApiServices";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Details = () => {
    const { store, dispatch } = useGlobalReducer();
    const { id } = useParams();

    useEffect(() => {
        pokeApiServices.getSinglePokemon(id).then(data => {
            dispatch({ type: 'pokemon_details', payload: data });
        });
    }, [id, dispatch]);


    const pokemon = store.details;
    if (!pokemon) return <p>Cargando datos del Pokémon...</p>;

    return (
        <div className="col d-flex justify-content-center mt-5">
            <div className="card p-3" style={{ width: "22rem" }}>
                <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
                    className="card-img-top"
                    alt={pokemon.name}
                />
                <div className="card-body">
                    <h2 className="card-title text-capitalize">{pokemon.name}</h2>
                    <p className="card-text">Peso: {pokemon.weight}</p>
                    <p className="card-text">Altura: {pokemon.height}</p>
                    <p className="card-text">
                        Tipo(s):{" "}
                        {pokemon.types.map((el, index) => (
                            <span key={index} className="badge bg-primary me-1">
                                {el.type.name}
                            </span>
                        ))}
                    </p>
                    <button
                        className="btn btn-warning"
                        onClick={() => dispatch({ type: "add_favorite", payload: { id, name: pokemon.name } })}
                    >
                        Favoritos
                    </button>
                </div>
            </div>
        </div>
    );
};
