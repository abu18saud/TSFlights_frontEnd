# TSFlights_frontEnd
This project for view 

# we used this command for create this project
- ng new TSFlightsApp 

# best set for any new project
- https://t.me/CsharpAbdullahAlsalem/220

# Making New Routes
$ ng g c home
$ ng generate component home

# Creating the Service
$ ng g service flights

# For Create a model
$ ng generate class flight --type=model 
-- https://www.codegrepper.com/code-examples/javascript/ng+generate+interface


# Old
import { Injectable } from '@angular/core';
import { Flight } from './flight.model';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';


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


  constructor(private http: HttpClient) { }

  getFlights(): Observable<any> {
    return this.http.get('http://localhost:3002/flights/');
    //return this.flights;
  }

  postFlight(flight: Flight) {

  }

  deleteFlight(id: number) {

  }
}
