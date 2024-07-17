import { useStore } from '../store';
import CardWrapper from './CardWrapper';
function PokeList() {
  const pokeDatas = useStore((state) => state.pokeData);
  console.log(pokeDatas);
  return pokeDatas.length > 0 ? (
    pokeDatas.map((pokedata) => (
      <CardWrapper key={pokedata.name} url={pokedata.url} />
    ))
  ) : (
    <p className="text-white">No Result is found</p>
  );
}
export default PokeList;
