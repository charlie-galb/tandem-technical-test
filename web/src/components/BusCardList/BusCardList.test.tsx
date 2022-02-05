import React from "react";
import { render, screen } from '@testing-library/react'

import BusDto from '../../types/BusDto';
import BusCardList from './BusCardList'

const testBus1: BusDto = {
    id: 1,
    busId: 111,
    destination: 'Test Road',
    minutesUntilArrival: 4,
    nonOperationalDays: [1,2],
}

const testBus2: BusDto = {
    id: 2,
    busId: 222,
    destination: 'Mock Avenue',
    minutesUntilArrival: 2,
    nonOperationalDays: [2,3],
}

const testBuses = [testBus1, testBus2]

describe('BusCardList', () => {

    beforeAll(() => {
        jest.useFakeTimers('modern');
    });

    afterAll(() => {
        jest.useRealTimers();
    });

    it('Should display all operational bus routes', () => {
        jest.setSystemTime(new Date(2022, 2, 5));
        const component = render(<BusCardList buses={testBuses} />)
        expect(screen.getAllByRole('listitem').length).toEqual(2)
    });

    it('Should not display non-operational bus routes', () => {
        jest.setSystemTime(new Date(2022, 2, 9));
        const component = render(<BusCardList buses={testBuses} />)
        expect(screen.getAllByRole('listitem').length).toEqual(1)
    })

})
