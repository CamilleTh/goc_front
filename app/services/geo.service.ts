import {Injectable} from "angular2/core";
import 'rxjs/Rx';
import {Http,} from "angular2/http";
import {Geolocation} from 'ionic-native';
import {Coordonnes} from "../models/Coordonnes";
import {Observable} from "rxjs/Observable";


@Injectable()
export class GeoService {

    constructor(private _http:Http) {}

    public coor:Coordonnes;

    public getCoordonnate(){

        return Observable.fromPromise(Geolocation.getCurrentPosition())
            .map(res => res)

        /*
        then((res) => {
            console.
            this.coor.lat = res.coords.latitude;
            this.coor.lon = res.coords.longitude;
            return this.coor;
        })*/

        /*let watch = Geolocation.watchPosition();
        watch.subscribe((data) => {
            this.coor.lat = data.coords.latitude
            this.coor.lon = data.coords.longitude
        })*/
        
    }
}