import React from "react";
import { render, screen } from '@testing-library/react'

import BusCard from './BusCard'

const testBus = {
    id: 1,
    busId: 2,
    destination: 'Test Road',
    minutesToArrival: 4,
}

describe('BusCard', () => {

    it('Should render the bus time data properly', () => {
        render(<BusCard bus={testBus} />)
        expect(screen.getByTestId('bus-number').innerHTML).toBe(String(testBus.busId))
        expect(screen.getByTestId('bus-destination').innerHTML).toBe(testBus.destination)
        expect(screen.getByTestId('bus-mins-to-arrival').innerHTML).toBe(`${testBus.minutesToArrival} mins`)
    })

})
