import React from "react";
import { render, screen } from '@testing-library/react'

import BusCardList from './BusCardList'

const testBus1 = {
    id: 1,
    busId: 111,
    destination: 'Test Road',
    minutesToArrival: 4,
}

const testBus2 = {
    id: 2,
    busId: 222,
    destination: 'Mock Avenue',
    minutesToArrival: 2,
}

const testBuses = [testBus1, testBus2]

describe('BusCardList', () => {

    it('Should render the bus cards properly', () => {
        const component = render(<BusCardList buses={testBuses} />)
        expect(screen.getAllByRole('listitem').length).toEqual(2)
    })

})
