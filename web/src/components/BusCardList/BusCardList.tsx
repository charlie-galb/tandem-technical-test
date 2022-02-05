import React from 'react';

import BusCard from '../BusCard/BusCard'
import BusDto from '../../types/BusDto';

interface Props {
    buses: BusDto[]
}

const BusCardList = (props: Props) => {

    const { buses } = props
    console.log(buses)

  return (
    <div>
        <div>
          Live bus times for <b>Park Road</b>
        </div>
        <ul>
            {buses.map((bus, idx) => {
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
