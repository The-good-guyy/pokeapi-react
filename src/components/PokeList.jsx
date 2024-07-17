import CardWrapper from './CardWrapper';
function PokeList({ pokeDatas }) {
  return pokeDatas.length > 0 ? (
    pokeDatas.map((pokedata) => (
      <CardWrapper key={pokedata.name} url={pokedata.url} />
    ))
  ) : (
    <p className="text-white">No Result is found</p>
  );
}
export default PokeList;
