import React from "react";
import { render, waitFor } from '@testing-library/react';
import axios from 'axios';

import BusDto from './types/BusDto';
import App from './App';

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

describe('BusCard', () => {

    beforeEach(() => {
        axios.get = jest.fn().mockReturnValue(testBuses);
    });

    it('Should retrieve bus times when the component mounts', async () => {
        render(<App />);
        await waitFor(() => expect(axios.get).toBeCalledTimes(1));
    });
        

    it('Should retrieve bus times every ten seconds', async () => {
        jest.useFakeTimers();
        render(<App />);
        jest.advanceTimersByTime(11000);
        await waitFor(() => expect(axios.get).toBeCalledTimes(2));
        jest.useRealTimers();
    });

});
