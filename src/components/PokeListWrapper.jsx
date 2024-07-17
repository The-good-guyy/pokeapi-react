import { useStore } from '../store';
import { useState, useEffect } from 'react';
import PokeList from './PokeList';
import { filledInputClasses } from '@mui/material';
function PokeListWrapper() {
  const filter = useStore((state) => state.filter);
  const pokeDatas = useStore((state) => state.pokeData);
  const [data, setData] = useState(pokeDatas);
  useEffect(() => {
    const filterData = pokeDatas.filter((data) => data.name.includes(filter));
    setData(filterData);
  }, [filter, pokeDatas]);
  return (
    <div className="max-w-screen-2xl flex flex-wrap items-start justify-between mx-auto p-4 bg-[#1F2544] text-[#81689D] min-h-screen w-full">
      <PokeList pokeDatas={data} />
    </div>
  );
}

export default PokeListWrapper;
