import { ApiService } from "./api.service";

describe('getBusTimes', () => {

    const service = new ApiService();
    
    it('returns a list of five bus times', () => {
        expect(service.getBusTimes().length).toEqual(5);
    });

    it('returns bus times with all the necessary attributes', () => {

        const busTime = service.getBusTimes()[0]

        expect(busTime.id).not.toBeNull();
        expect(busTime.busId).not.toBeNull();
        expect(busTime.destination).not.toBeNull();
        expect(busTime.minutesUntilArrival).not.toBeNull();
        expect(busTime.nonOperationalDays).not.toBeNull();
    });

});