import React from "react";
import { render, screen } from '@testing-library/react';
import axios from 'axios';

import App from './App';

describe('BusCard', () => {

    beforeEach(() => {
        axios.get = jest.fn();
    });

    it('Should retrieve bus times when the component mounts', () => {
        render(<App />);
        expect(axios.get).toBeCalledTimes(1);
    });

    it('Should retrieve bus times every ten seconds', () => {
        jest.useFakeTimers();
        render(<App />);
        jest.advanceTimersByTime(11000);
        expect(axios.get).toBeCalledTimes(2);
    });

});
