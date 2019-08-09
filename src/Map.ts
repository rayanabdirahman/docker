import { Mappable } from "./interfaces/mappable.interface";

export class Map {
  private googleMap: google.maps.Map;
  private mapHTMLElement: Element;

  constructor(mapHTMLElementId?: string) {
    this.mapHTMLElement = mapHTMLElementId ? document.querySelector(mapHTMLElementId) : document.querySelector('#map');
    this.googleMap = new google.maps.Map(this.mapHTMLElement, {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0
      }
    });  
  }

  addMarker(mappable: Mappable): void {
    const { lat, lng } = mappable.location;
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: lat,
        lng: lng
      }
    });

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent()
      });

      infoWindow.open(this.googleMap, marker);
    })
  }
}