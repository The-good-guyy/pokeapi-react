import { useStore } from '../store';
import CardWrapper from './CardWrapper';
function PokeList({ filter }) {
  const pokeDatas = useStore((state) => state.pokeData);

  return pokeDatas.length > 0 ? (
    pokeDatas.map(
      (pokedata) =>
        pokedata.name.includes(filter) && (
          <CardWrapper key={pokedata.name} url={pokedata.url} />
        )
    )
  ) : (
    <p className="text-white">No Result is found</p>
  );
}
export default PokeList;
