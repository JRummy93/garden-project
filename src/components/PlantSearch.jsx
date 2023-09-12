import React from 'react';
import { Button, Container,FormControlLabel, Slider, Switch, TextField } from '@mui/material';
const PlantSearch = () => {
  return (
    <Container style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', flexDirection: 'column' }}>
        <Container style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', padding: '20px' }}>
            <TextField id="outlined-basic" label="Search for a plant" variant="outlined" minWidth="300px"/>
                <Container style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', flexDirection: 'column', padding: '20px' }}>
                    <FormControlLabel control={<Switch />} label="Edible" />
                    <FormControlLabel control={<Switch />} label="Toxic" />
                </Container>
                <FormControlLabel control={<Switch />} label="Light Required" />
                <FormControlLabel control={<Switch />} label="Water Required" />
                <FormControlLabel control={<Switch />} label="Temperature" />
                <FormControlLabel control={<Switch />} label="Plant Size" />
        </Container>
        <Button variant="contained">Search</Button>
    </Container>
  );
};

export default PlantSearch;