import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

export default function RowRadioButtonsGroup() {
  return (
    <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        defaultValue="Default"
      >
        <FormControlLabel value="Default" control={<Radio />} label="Default" />
        <FormControlLabel value="Shiny" control={<Radio />} label="Shiny" />
        <FormControlLabel
          value="Dream World"
          control={<Radio />}
          label="Dream World"
        />
      </RadioGroup>
    </FormControl>
  );
}
