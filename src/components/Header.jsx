import { TextField } from '@mui/material';
import RowRadioButtonsGroup from './PokemonRadio';
import { useRef } from 'react';
import { useStore } from '../store';
function Header() {
  // const updateData = useStore((state) => state.increasePokedata);
  // const resetData = useStore((state) => state.removeAllPokeData);
  // const updateNext = useStore((state) => state.updateLoadMore);
  const inputRef = useRef('');
  const updateFilter = useStore((state) => state.setFilter);
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   resetData();
  //   updateNext('');
  //   // console.log(`https://pokeapi.co/api/v2/pokemon/${inputRef.current.value}`);
  //   const response = await fetch(
  //     `https://pokeapi.co/api/v2/pokemon/${inputRef.current.value}`
  //   );
  //   if (response.ok) {
  //     updateData([
  //       {
  //         name: inputRef.current.value,
  //         url: `https://pokeapi.co/api/v2/pokemon/${inputRef.current.value}`,
  //       },
  //     ]);
  //   }
  // };
  const handleKeyDown = () => {
    updateFilter(inputRef.current.value);
  };
  return (
    <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4 bg-[#FFD0EC] text-[#81689D]">
      <form className="w-full max-w-xl min-w-80">
        <div className="w-full">
          <TextField
            id="outlined-multiline-flexible"
            label="Pokemon"
            fullWidth
            inputRef={inputRef}
            onChange={handleKeyDown}
          />
        </div>
      </form>
      <div className="max-w-xl min-w-80">
        <RowRadioButtonsGroup />
      </div>
    </div>
  );
}

export default Header;
