import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import { } from 'googlemaps';


@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styles: [
    `agm-map {
  height: 100%;
  width: 100%
}`
  ]



})
export class MapsComponent implements OnInit {
  @ViewChild('search') search: ElementRef;
  lat = 14.65420;
  lng = 100.58795;
  latMark: any;
  lngMark: any;
  zoom = 16;
  mapTypeId = 'hybrid';
  markers: any = [];
  constructor(private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone) { }


  ngOnInit() {
    this.setCurrentLocation();
    this.mapsAPILoader.load()
      .then(() => {
        const autocomplete = new google.maps.places.Autocomplete(this.search.nativeElement, {
          types: []
        })
        autocomplete.addListener('place_changed', () => {
          this.ngZone.run(() => {
            const place: google.maps.places.PlaceResult = autocomplete.getPlace();
            console.log(place);

            this.lat = place.geometry.location.lat();
            this.lng = place.geometry.location.lng();

          })
        })


      });
  }

  setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position);
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;

      }, (error) => {
        console.log(error);
      });

    } else {
      alert('Geolocation don\'t support')
    }
  }

  onMapClick(event) {
    console.log(event);
    // this.markers.push(event.coords);
    this.latMark = event.coords.lat;
    this.lngMark = event.coords.lng;
  }
}
