import React from 'react';

import BusCard from '../BusCard/BusCard'
import BusDto from '../../types/BusDto';

interface Props {
    buses: BusDto[]
}

const BusCardList = (props: Props) => {

    const { buses } = props

    const filterNonOperationalRoutes = (unfilteredBusList: BusDto[]) => {
        const date = new Date();
        const day = date.getDay()
        return unfilteredBusList?.filter(bus => !bus.nonOperationalDays.includes(day));
      }
    
    const filteredBuses = filterNonOperationalRoutes(buses);

  return (
    <div>
        <div>
          Live bus times for <b>Park Road</b>
        </div>
        <ul>
            {filteredBuses?.map((bus) => {
                return (
                    <li key={bus.id} >
                        <BusCard bus={bus} />
                    </li>
                )
            })}
        </ul>
    </div>
  )
};

export default BusCardList
