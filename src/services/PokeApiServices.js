const pokeApiServices = {};

// Obtener todos los Pokémon
pokeApiServices.getAllPokemon = async () => {
    try {
        const resp = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
        if (!resp.ok) throw new Error('Error al obtener todos los Pokémon');
        const data = await resp.json();
        return data;
    } catch (error) {
        console.error(error);
        return null;
    }
};

// Obtener un solo Pokémon por ID o nombre
pokeApiServices.getSinglePokemon = async (id) => {
    try {
        const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        if (!resp.ok) throw new Error('Error al obtener el Pokémon');
        const data = await resp.json();
        return data;
    } catch (error) {
        console.error(error);
        return null;
    }
};

export default pokeApiServices;
