import React from 'react';
import { Button, Container,FormControlLabel, Slider, Switch, TextField } from '@mui/material';
import WaterRequirementsCheckList from './CheckListWater';
const PlantSearch = () => {
  return (
    <Container style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', flexDirection: 'column' }}>
        <Container style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', padding: '20px' }}>
            <TextField id="outlined-basic" label="Search for a plant" variant="outlined" style={{ width: '50%', padding: '20px'}}/>
                <Container style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-around', flexDirection: 'column', padding: '20px', width: '10%' }}>
                    <FormControlLabel control={<Switch />} label="Edible" />
                    <FormControlLabel control={<Switch />} label="Toxic" />
                </Container>
                <FormControlLabel control={<WaterRequirementsCheckList/>} style= {{ width: '10%', padding: '20px' }}/>
                <FormControlLabel control={<Switch />} label="Light Required" style= {{ width: '10%', padding: '20px' }}/>
                <FormControlLabel control={<Switch />} label="Temperature" style= {{ width: '10%', padding: '20px' }}/>
                <FormControlLabel control={<Switch />} label="Plant Size" style= {{ width: '10%', padding: '20px' }}/>
        </Container>
        <Button variant="contained">Search</Button>
    </Container>
  );
};

export default PlantSearch;