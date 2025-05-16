import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import { PokeCard } from "../components/Card";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";


export const Home = () => {

	const { store, dispatch } = useGlobalReducer()


	return (
		<div className="text-center mt-5">
			<h1>Echa un vistazo a estos ejemplares</h1>

			<div className="card-scroll-container">
				{store.pokemons?.results?.map((el, i) => <PokeCard key={i} name={el.name} url={el.url} />)}
			</div>
			

		</div>
	)

}