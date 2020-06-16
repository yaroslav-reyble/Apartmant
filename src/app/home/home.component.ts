import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import {AuthService} from "@shared/services/auth.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']

})
export class HomeComponent implements OnInit {
  longitude: number;
  latitude: number;
  location: any;
  cities = ['New York', 'London', 'Kiev'];
  city: string;
  constructor(
    @Inject(PLATFORM_ID) private _platformId: Object,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
   this.getLocation()
  }

  getLocation(): void{
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position)=>{
        this.longitude = position.coords.longitude;
        this.latitude = position.coords.latitude;
      });
      this.authService.getUserLocation().subscribe((res) => {
        console.log(res);
        this.location =  res;
        this.cities.push(this.location.city)
        this.city = this.location.city;
      })
    } else {
      console.log("No support for geolocation")
    }
  }
}
