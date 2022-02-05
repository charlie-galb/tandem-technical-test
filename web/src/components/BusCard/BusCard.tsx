import React from 'react';

import BusDto from '../../types/BusDto';

interface Props {
    bus: BusDto
}

const BusCard = (props: Props) => {
    const { bus } = props
    const { busId, destination, minutesToArrival } = bus

    return (
        <div className="Card">
          <div className="Card__Header">
            <b data-testid='bus-number'>{busId}</b>
          </div>
          <div className="Card__Details">
            <div data-testid='bus-destination'>{destination}</div>
            <div data-testid='bus-mins-to-arrival'>{minutesToArrival} mins</div>
          </div>
        </div>
    )
}

export default BusCard
