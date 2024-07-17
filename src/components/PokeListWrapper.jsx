import { useStore } from '../store';
import PokeList from './PokeList';
function PokeListWrapper() {
  const filter = useStore((state) => state.filter);
  console.log(filter);
  return (
    <div className="max-w-screen-2xl flex flex-wrap items-start justify-between mx-auto p-4 bg-[#1F2544] text-[#81689D] min-h-screen w-full">
      <PokeList filter={filter} />
    </div>
  );
}

export default PokeListWrapper;
