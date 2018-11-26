import { Component, OnInit } from "@angular/core";
// import {
//   GoogleMaps,
//   GoogleMap,
//   GoogleMapsEvent,
//   GoogleMapOptions,
//   CameraPosition,
//   MarkerOptions,
//   Marker,
//   Environment
// } from '@ionic-native/google-maps/ngx';
import { Router } from "@angular/router";
declare var google;
@Component({
  selector: "app-map",
  templateUrl: "./map.page.html",
  styleUrls: ["./map.page.scss"]
})
export class MapPage implements OnInit {
  // map: GoogleMap;
  map;
  markers = [];
  GoogleAutocomplete = new google.maps.places.AutocompleteService();
  autocomplete = { input: "" };
  autocompleteItems = [];
  geocoder = new google.maps.Geocoder();

  constructor(private router: Router) {}

  ngOnInit() {
    this.loadMap();
  }

  loadMap() {
    this.map = new google.maps.Map(document.getElementById("map_canvas"), {
      center: { lat: -34.9011, lng: -56.1645 },
      zoom: 15
    });
    let marker = new google.maps.Marker({
      title: "Ionic",
      animation: google.maps.Animation.DROP,
      position: { lat: -34.9011, lng: -56.1645 },
      map: this.map
    });
    this.markers.push(marker);
    google.maps.event.addListener(marker, "click", () => {
      console.log("reached here inside marker");
      this.router.navigate(['/home'])
    });
    // This code is necessary for browser
    // Environment.setEnv({
    //   'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyDTnnlhDW71zaEyVichmDouZaH7p0_Of_g',
    //   'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyDTnnlhDW71zaEyVichmDouZaH7p0_Of_g'
    // });

    // let mapOptions: GoogleMapOptions = {
    //   camera: {
    //      target: {
    //        lat: 43.0741904,
    //        lng: -89.3809802
    //      },
    //      zoom: 18,
    //      tilt: 30
    //    }
    // };

    // this.map = GoogleMaps.create('map_canvas', mapOptions);

    // let marker: Marker = this.map.addMarkerSync({
    //   title: 'Ionic',
    //   icon: 'blue',
    //   animation: 'DROP',
    //   position: {
    //     lat: 43.0741904,
    //     lng: -89.3809802
    //   }
    // });
    // marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
    //   this.router.navigate(['/home'])
    // });
  }

  updateSearchResults() {
    if (this.autocomplete.input == "") {
      this.autocompleteItems = [];
      return;
    }
    this.GoogleAutocomplete.getPlacePredictions(
      { input: this.autocomplete.input },
      (predictions, status) => {
        this.autocompleteItems = [];
        // this.zone.run(() => {
        predictions.forEach(prediction => {
          this.autocompleteItems.push(prediction);
        });
        // });
      }
    );
  }

  selectSearchResult(item) {
    // this.clearMarkers();
    this.autocompleteItems = [];

    this.geocoder.geocode({ placeId: item.place_id }, (results, status) => {
      if (status === "OK" && results[0]) {
        let position = {
          lat: results[0].geometry.location.lat,
          lng: results[0].geometry.location.lng
        };
        // let marker = new google.maps.Marker({
        //   position: results[0].geometry.location,
        //   map: this.map
        // });
        // this.markers.push(marker);
        this.map.setCenter(results[0].geometry.location);
      }
    });
  }

  // tryGeolocation(){
  //   this.clearMarkers();
  //   this.geolocation.getCurrentPosition().then((resp) => {
  //     let pos = {
  //       lat: resp.coords.latitude,
  //       lng: resp.coords.longitude
  //     };
  //     let marker = new google.maps.Marker({
  //       position: pos,
  //       map: this.map,
  //       title: 'I am here!'
  //     });
  //     this.markers.push(marker);
  //     this.map.setCenter(pos);
  //   }).catch((error) => {
  //     console.log('Error getting location', error);
  //   });
  // }
}
