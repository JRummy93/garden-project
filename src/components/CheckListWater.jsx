import * as React from 'react';
import { FormControl, FormLabel, FormGroup, FormControlLabel, Checkbox } from '@mui/material';

export default function WaterRequirementsCheckList() {

  const [state, setState] = React.useState({
    low: false,
    medium: false,
    high: false,
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const { low, medium, high } = state;

  return (
    <div>
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormLabel component="legend">Water Requirements</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox checked={low} onChange={handleChange} name="low" size='small' />
            }
            label="Low"
          />
          <FormControlLabel
            control={
              <Checkbox checked={medium} onChange={handleChange} name="medium" size='small'/>
            }
            label="Medium"
          />
          <FormControlLabel
            control={
              <Checkbox checked={high} onChange={handleChange} name="high" size='small'/>
            }
            label="High"
          />
        </FormGroup>
      </FormControl>
    </div>
  );
}
