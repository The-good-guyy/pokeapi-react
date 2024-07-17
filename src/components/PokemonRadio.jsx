import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { useStore } from '../store';
export default function RowRadioButtonsGroup() {
  const type = useStore((state) => state.type);
  const changeType = useStore((state) => state.setType);
  const handleChange = (event) => {
    changeType(event.target.value);
  };
  return (
    <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value={type}
        onChange={handleChange}
      >
        <FormControlLabel value="default" control={<Radio />} label="Default" />
        <FormControlLabel value="shiny" control={<Radio />} label="Shiny" />
        <FormControlLabel
          value="dreamWorld"
          control={<Radio />}
          label="Dream World"
        />
      </RadioGroup>
    </FormControl>
  );
}
