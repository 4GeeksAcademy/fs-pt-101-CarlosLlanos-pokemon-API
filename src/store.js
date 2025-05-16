export const initialStore = () => {
  return {
    favorites: [],
    message: null,
    details: null,
    pokemons: [],
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      }
    ]
  };
};

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'remove_favorite': {
      return {
        ...store,
        favorites: store.favorites.filter(fav => fav.id !== action.payload.id)
      };
    }

    case 'add_favorite': {
      const alreadyExists = store.favorites.some(fav => fav.id === action.payload.id);

      if (alreadyExists) return store;

      return {
        ...store,
        favorites: [...store.favorites, action.payload]
      };
    }

    case 'pokemon_details': {
      return {
        ...store,
        details: action.payload
      };
    }

    case 'pokemon_data': {
      return {
        ...store,
        pokemons: action.payload
      };
    }

    case 'add_task': {
      const { id, color } = action.payload;

      return {
        ...store,
        todos: store.todos.map(todo =>
          todo.id === id ? { ...todo, background: color } : todo
        )
      };
    }

    default:
      throw new Error('Unknown action type.');
  }
}