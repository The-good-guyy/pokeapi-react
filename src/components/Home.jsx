import PokeList from './PokeList';
import { useEffect } from 'react';
import { useStore } from '../store';
import LoadMore from './LoadMore';
function Home() {
  const updateData = useStore((state) => state.increasePokedata);
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0')
      .then((response) => response.json())
      .then((data) => {
        updateData(data.results);
      });
  }, []);
  return (
    <div className="flex flex-col bg-[#474F7A] justify-center content-between items-center">
      <div className="max-w-screen-2xl flex flex-wrap items-start justify-between mx-auto p-4 bg-[#1F2544] text-[#81689D] min-h-screen">
        <PokeList />
      </div>
      <div className="bg-[#1F2544] max-w-screen-2xl w-full">
        <LoadMore />
      </div>
    </div>
  );
}

export default Home;
