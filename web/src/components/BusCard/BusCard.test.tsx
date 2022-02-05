import React from "react";
import { render, screen } from '@testing-library/react'

import BusDto from '../../types/BusDto';
import BusCard from './BusCard'

const testBus: BusDto = {
    id: 1,
    busId: 2,
    destination: 'Test Road',
    minutesUntilArrival: 4,
    nonOperationalDays: [3],
}

const testBusDue:BusDto = {
    id: 1,
    busId: 2,
    destination: 'Test Road',
    minutesUntilArrival: 1,
    nonOperationalDays: [4],
}

describe('BusCard', () => {

    it('Should render the bus time data properly', () => {
        render(<BusCard bus={testBus} />)
        expect(screen.getByTestId('bus-number').innerHTML).toBe(String(testBus.busId))
        expect(screen.getByTestId('bus-destination').innerHTML).toBe(testBus.destination)
        expect(screen.getByTestId('bus-mins-to-arrival').innerHTML).toBe(`${testBus.minutesUntilArrival} mins`)
    })

    it('Should render minutesUntilArrival as "due" if the value is one or below', () => {
        render(<BusCard bus={testBusDue} />)
        expect(screen.getByTestId('bus-mins-to-arrival').innerHTML).toBe(`Due`)
    })

})
