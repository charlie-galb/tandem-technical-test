import React from 'react';

import BusCard from '../BusCard/BusCard'
import BusDto from '../../types/BusDto';

interface Props {
    buses: BusDto[]
}

const BusCardList = (props: Props) => {

    const { buses } = props

    const processBuses = (unprocessedBusList: BusDto[]) => {
        if (unprocessedBusList) {
            return filterNonOperationalRoutes(unprocessedBusList).sort(compareBusesByMinutesToArrival);
        } 
    };

    const compareBusesByMinutesToArrival = (busA: BusDto, busB: BusDto) => {
        return busA.minutesUntilArrival - busB.minutesUntilArrival;
      };

    const filterNonOperationalRoutes = (unfilteredBusList: BusDto[]) => {
        const date = new Date();
        const day = date.getDay()
        return unfilteredBusList.filter(bus => !bus.nonOperationalDays.includes(day));
      }

  return (
    <div className='Card_List_Container'>
        <div className='Card_List_Header'>
          Live bus times for <b>Park Road</b>
        </div>
        <ul className='Card_List'>
            {processBuses(buses)?.map((bus) => {
                return (
                    <li className='Card_List_Item' key={bus.id} >
                        <BusCard bus={bus} />
                    </li>
                )
            })}
        </ul>
    </div>
  )
};

export default BusCardList
