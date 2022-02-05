import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios'

import BusCardList from './components/BusCardList/BusCardList'
import BusDto from './types/BusDto'

const App = () => {
  const [buses, setBuses] = useState<BusDto[]>([])
  const [timeInterval, setTimeInterval] = useState(0);

// Call api when first load
useEffect(() => {
  fetchBusTimes();
}, [])

// After, every five seconds to call api
useEffect(() => {
  const interval = setInterval(async () => {
      await fetchBusTimes();
  }, 1000);

  return () => {
    clearInterval(interval);
  };
}, [])

  const fetchBusTimes = async () => {
     try {
        const res = await axios.get('/bus-times');
        const busList: BusDto[] = res.data
        setBuses(busList)
    } catch (e) {
        console.log(e);
    }
  }

  return (
    <div className="App">
      <BusCardList buses={buses} />
    </div>
  );
};

export default App;
