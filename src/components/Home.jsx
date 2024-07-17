import PokeListWrapper from './PokeListWrapper';
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
    <div className="flex flex-col dark:bg-[#474F7A] justify-center content-between items-center bg-white">
      <PokeListWrapper />
      <div className="bg-[#1F2544] max-w-screen-2xl w-full">
        <LoadMore />
      </div>
    </div>
  );
}

export default Home;
