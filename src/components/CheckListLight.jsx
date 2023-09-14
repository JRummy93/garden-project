import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const levels = [
  'Low',
  'Medium',
  'High',
];

export default function LightRequirementsCheckList() {
  const [lightRequirements, setLightRequirements] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setLightRequirements(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: '160px' }}>
        <InputLabel id="LightRequired">Light Required</InputLabel>
        <Select
          labelId="LightRequiredLabel"
          id="LightRequired"
          multiple
          value={lightRequirements}
          onChange={handleChange}
          input={<OutlinedInput label="Light Required" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {levels.map((level) => (
            <MenuItem key={level} value={level}>
              <Checkbox checked={lightRequirements.indexOf(level) > -1} />
              <ListItemText primary={level} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}