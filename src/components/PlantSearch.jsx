import React from 'react';
import { Button, Container,FormControlLabel, Slider, Switch, TextField } from '@mui/material';
import WaterRequirementsCheckList from './CheckListWater';
import LightRequiredCheckList from './CheckListLight';
const PlantSearch = () => {
  return (
    <Container style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'column' }}>
        <Container style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px', flexWrap: 'wrap' }}>
          <TextField id="outlined-basic" label="Search for a plant" variant="outlined" style={{ flex: '0 0 30%' }}/>
          <Container style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-around', flexDirection: 'column', flex: '0 0 5%' }}>
            <FormControlLabel control={<Switch />} label="Edible" />
            <FormControlLabel control={<Switch />} label="Toxic" />
          </Container>
          <FormControlLabel control={<WaterRequirementsCheckList/>} style={{ flex: '0 0 15%' }}/>
          <FormControlLabel control={<LightRequiredCheckList/>} style={{ flex: '0 0 15%' }}/>
          <FormControlLabel control={<Switch />} label="Temperature" style={{ flex: '0 0 12%' }}/>
          <FormControlLabel control={<Switch />} label="Plant Size" style={{ flex: '0 0 12%' }}/>
        </Container>
        <Button variant="contained">Search</Button>
    </Container>
  );
};

export default PlantSearch;