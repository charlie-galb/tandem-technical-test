import React, { useEffect, useState } from "react";

import BusCard from "../BusCard/BusCard";
import SearchBar from "../SearchBar/Searchbar";
import BusDto from "../../types/BusDto";

interface Props {
  buses: BusDto[];
}

const BusCardList = (props: Props) => {
  const [searchQuery, setSearchQuery] = useState("");

  const { buses } = props;

  const processBuses = (unprocessedBusList: BusDto[]) => {
    if (unprocessedBusList) {
      const operationalBuses = filterNonOperationalRoutes(unprocessedBusList);
      return filterSearchTerms(operationalBuses).sort(
        compareBusesByMinutesToArrival
      );
    }
  };

  const compareBusesByMinutesToArrival = (busA: BusDto, busB: BusDto) => {
    return busA.minutesUntilArrival - busB.minutesUntilArrival;
  };

  const filterNonOperationalRoutes = (unfilteredBusList: BusDto[]) => {
    const date = new Date();
    const day = date.getDay();
    return unfilteredBusList.filter(
      (bus) => !bus.nonOperationalDays.includes(day)
    );
  };

  const filterSearchTerms = (buses: BusDto[]) => {
    return buses.filter((bus) => {
      if (searchQuery === "") {
        return bus;
      } else if (bus.busId.toString().includes(searchQuery)) {
        return bus;
      }
    });
  };

  return (
    <div className="Card_List_Container">
      <div className="Card_List_Header">
        Live bus times for <b>Park Road</b>
      </div>
      <SearchBar setQuery={setSearchQuery} />
      <ul className="Card_List">
        {processBuses(buses)?.map((bus) => {
          return (
            <li className="Card_List_Item" key={bus.id}>
              <BusCard bus={bus} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BusCardList;
