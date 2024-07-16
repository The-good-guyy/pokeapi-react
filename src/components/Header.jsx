import { TextField } from '@mui/material';
import RowRadioButtonsGroup from './PokemonRadio';
function Header(props) {
  return (
    <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4 bg-[#FFD0EC] text-[#81689D]">
      <div className="w-full max-w-xl min-w-80">
        <TextField
          id="outlined-multiline-flexible"
          label="Pokemon"
          multiline
          fullWidth
        />
      </div>
      <div className="max-w-xl min-w-80">
        <RowRadioButtonsGroup />
      </div>
    </div>
  );
}

export default Header;
