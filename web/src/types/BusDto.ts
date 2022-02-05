type BusDto = {
  id: number;
  busId: number;
  destination: string;
  minutesUntilArrival: number;
  nonOperationalDays: number[];
};

export default BusDto;
