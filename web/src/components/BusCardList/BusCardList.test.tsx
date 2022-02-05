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

    it('Should display all operational bus routes in order of arrival', () => {
        jest.setSystemTime(new Date(2022, 2, 5));
        expect(testBuses[0].minutesUntilArrival).toEqual(4);
        expect(testBuses[1].minutesUntilArrival).toEqual(2);
        render(<BusCardList buses={testBuses} />);
        const busNodes = screen.getAllByRole('listitem');
        expect(busNodes.length).toEqual(2);
        expect(busNodes[0]).toHaveTextContent('2 mins');
        expect(busNodes[1]).toHaveTextContent('4 mins');
    });

    it('Should not display non-operational bus routes', () => {
        jest.setSystemTime(new Date(2022, 2, 9));
        render(<BusCardList buses={testBuses} />)
        expect(screen.getAllByRole('listitem').length).toEqual(1)
    })

})
