// import React, { useState } from 'react';
// import { Button, Container, FormControlLabel, Switch, TextField } from '@mui/material';
// import WaterRequirementsCheckList from './CheckListWater';
// import LightRequiredCheckList from './CheckListLight';
// import { handleSubmit } from '@/pages/explore';


// const usePlantSearch = () => {
  
//   const [searchForm, setSearchForm] = useState({
//     plant: '',
//     edible: false,
//     toxic: false,
//     temperature: false,
//     plantSize: false
//   });

//   const handleInputChange = (e) => {
//     const { name, value, checked } = e.target;
//     setSearchForm((prevState) => ({
//       ...prevState,
//       [name]: name === 'edible' || name === 'toxic' || name === 'temperature' || name === 'plantSize' ? checked : value
//     }));
//   }; 

//   // const handleSubmit = () => {
//   //   const { plant, edible, toxic, temperature, plantSize } = searchForm;

//   //   const plantQ = (plant) => {
//   //     if (plant !== '') {
//   //       return `&q=${plant}`;
//   //     } else {
//   //       return '';
//   //     }
//   //   }

//   //   // const edibleQ = (edible) => {
//   //   //   if (edible) {
//   //   //     return `&edible=${edible}`;
//   //   //   } else {
//   //   //     return '';
//   //   //   }
//   //   // }

//   //   // const toxicQ = (toxic) => {
//   //   //   if (toxic) {
//   //   //     return `&toxic=${toxic}`;
//   //   //   } else {
//   //   //     return '';
//   //   //   }
//   //   // }

//   //   const newSearchQuery = plantQ(plant);
    
//   //   fetch(`/api/explore`, {
//   //     method: 'POST',
//   //     headers: {
//   //       'Content-Type': 'application/json',
//   //     },
//   //     body: JSON.stringify({
//   //       newSearchQuery
//   //     })
//   //   })
//   //     .then(response => response.json())
//   //     .then(data => {
//   //       return data;
//   //     })
//   //     .catch(error => {
//   //       console.error('Error:', error);
//   //     });
//   // };
  
  
//   return {
//     searchForm,
//     render: (
//     <Container style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'column' }}>
//       <Container style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px', flexWrap: 'wrap' }}>
//         <TextField id="outlined-basic" label="Search for a plant" variant="outlined" style={{ flex: '0 0 30%' }} name="plant" value={searchForm.plant} onChange={handleInputChange} />
//         <Container style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-around', flexDirection: 'column', flex: '0 0 5%' }}>
//           <FormControlLabel control={<Switch />} label="Edible" name="edible" checked={searchForm.edible} onChange={handleInputChange} />
//           <FormControlLabel control={<Switch />} label="Toxic" name="toxic" checked={searchForm.toxic} onChange={handleInputChange} />
//         </Container>
//         <FormControlLabel control={<WaterRequirementsCheckList />} style={{ flex: '0 0 15%' }} />
//         <FormControlLabel control={<LightRequiredCheckList />} style={{ flex: '0 0 15%' }} />
//         <FormControlLabel control={<Switch />} label="Temperature" name="temperature" checked={searchForm.temperature} onChange={handleInputChange} style={{ flex: '0 0 12%' }} />
//         <FormControlLabel control={<Switch />} label="Plant Size" name="plantSize" checked={searchForm.plantSize} onChange={handleInputChange} style={{ flex: '0 0 12%' }} />
//       </Container>
//       <Button variant="contained" onClick={handleSubmit}>Search</Button>
//     </Container>
//   ),}
// };
// export default usePlantSearch;
