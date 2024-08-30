import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { fetchAllSongs } from '../../api/api';
import { useState , useEffect } from "react";
import Section from '../Section/Section';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const [allSongsData, setAllSongsData] = useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const generateSongs = async()=>{
    try{
      const allSongres = await fetchAllSongs();
      setAllSongsData(allSongres)
    }catch(err){
        console.error(err)
    }
  }

  const filteredSongs = (genre) => {
    if (genre === 0) {
      return allSongsData;
    } else {
      return allSongsData.filter((song) => song.genre.key === genre);
    }
  };

  useEffect(()=>{
    generateSongs();
    // eslint-disable-next-line
  },[])

  return (
    <Box sx={{ width: '100%' }}>
        <Typography variant="h6" gutterBottom>
        Songs
      </Typography>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" textColor=' '>
          <Tab label="All" {...a11yProps(0)} />
          <Tab label="Rock" {...a11yProps(1)} />
          <Tab label="Pop" {...a11yProps(2)} />
          <Tab label="Jazz" {...a11yProps(3)} />
          <Tab label="Blues" {...a11yProps(4)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}><Section data={filteredSongs(0)}  type="song"/></CustomTabPanel>
      <CustomTabPanel value={value} index={1}><Section data={filteredSongs('rock')} title="Songs" type="song"/></CustomTabPanel>
      <CustomTabPanel value={value} index={2}><Section data={filteredSongs('pop')} title="Songs" type="song"/></CustomTabPanel>
      <CustomTabPanel value={value} index={3}><Section data={filteredSongs('jazz')} title="Songs" type="song"/></CustomTabPanel>
      <CustomTabPanel value={value} index={4}><Section data={filteredSongs('blues')} title="Songs" type="song"/></CustomTabPanel>
    </Box>
  );
}
