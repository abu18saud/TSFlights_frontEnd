import { Component, OnInit } from '@angular/core';
import { FlightsService } from '../flights.service';
import { Flight } from '../flight.model';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
loading = true;

  flights: Flight[] = [];
  selectedOrigin: string = "";
  selectedDestination: string = "";
  filteredOriginList: any[] = [];
  filteredDestinationList: any[] = [];




  constructor(private flightsService: FlightsService) { }

  ngOnInit(): void {
    this.flightsService.getAllOrigins().subscribe(data =>{
      this.filteredOriginList = data;
      this.loading = false;
    }); 

    this.flightsService.getAllDestinations().subscribe(data =>{
      this.filteredDestinationList = data;
      this.loading = false;

    });
    /*     this.flightsService.getFlights().subscribe(data => {
          this.flights = data;
        }) */
  }

  query(): void {
    const origin = this.selectedOrigin;
    const destination = this.selectedDestination;
    this.flightsService.getFlights(origin, destination).subscribe(data => {
      this.flights = data;
    })
  }


}