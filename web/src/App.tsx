import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

import BusCardList from "./components/BusCardList/BusCardList";
import BusDto from "./types/BusDto";

const App = () => {
  const [buses, setBuses] = useState<BusDto[]>([]);

  // Call api when first load
  useEffect(() => {
    fetchBusTimes();
  }, []);

  const fetchBusTimes = async () => {
    try {
      const res = await axios.get("/bus-times");
      const busList: BusDto[] = res.data;
      console.log('Fetched bus times on mount')
      setBuses(busList);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const eventSource = new EventSource(`/bus-times-events`);
    eventSource.onmessage = (event) => updateBusTimes(event.data);
    return () => {
      eventSource.close();
    };
  }, []);

  const updateBusTimes = ((data: string) => {
    const parsedData = JSON.parse(data);
    setBuses(parsedData);
  });

  return (
    <div className="App">
      <BusCardList buses={buses} />
    </div>
  );
};

export default App;
