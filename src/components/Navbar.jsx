import useGlobalReducer from "../hooks/useGlobalReducer";
import { Link } from "react-router-dom";

const Navbar = () => {
	const { store, dispatch } = useGlobalReducer();
		const favorites = store.favorites;

	const handleRemove = (id) => {
		dispatch({ type: "remove_favorite", payload: {id}});
	};	

	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
			<Link to="/" className="navbar-brand">
				<img src="https://pokeapi.co/static/pokeapi_256.3fa72200.png" alt="logo" />
			</Link>

			<div className="ms-auto dropdown">
				<button
					className="btn btn-warning dropdown-toggle"
					type="button"
					data-bs-toggle="dropdown"
					aria-expanded="false"
				>
					Favoritos <span className="badge bg-secondary">{store.favorites?.length || 0}</span>
				</button>
				<ul className="dropdown-menu dropdown-menu-end">
					{favorites.length === 0 ? (
						<li className="dropdown-item text-muted">No hay favoritos</li>
					) : (
						favorites.map((poke, i) => (
							<li key={i} className="dropdown-item d-flex justify-content-between align-items-center">
								<Link className="dropdown-item" to={`/details/${poke.id}`}>
									{poke.name} (#{poke.id})
								</Link>
								<button className="btn btn-sm btn-outline-danger"
								onClick={() => handleRemove(poke.id)}> ❌ </button>
							</li>
						))
					)}
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;