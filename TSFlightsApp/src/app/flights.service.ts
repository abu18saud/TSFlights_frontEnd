import { Injectable } from '@angular/core';
import { Flight } from './flight.model';


@Injectable({
  providedIn: 'root'
})
export class FlightsService {

  flights: Flight[] = [
    {
      origin: "Miami", destination: 'Chicago', flightNumber: 345,
      depart: new Date(1988, 3, 15),
      arrive: new Date(1988, 3, 15), nonstop: true
    },
    {
      origin: "New York", destination: 'Los Angeles', flightNumber: 432,
      depart: new Date(1988, 3, 15),
      arrive: new Date(1988, 3, 15), nonstop: false
    }, //'2020-05-25T23:23:21.932Z'
  ];


  constructor() { }

  getFlights() {
    return this.flights;
  }

  postFlight(flight: Flight) {

  }

  deleteFlight(id: number) {

  }



}
