import {Page, NavController} from 'ionic-angular';
import {DataService} from "../../services/data.service";
import {GeoService} from "../../services/geo.service";
import {Coordonnes} from "../../models/Coordonnes";
import {Observable} from "rxjs/Observable";
import {Http, Response, Headers} from "angular2/http";



@Page({
    templateUrl: 'build/pages/home/home.html',
    providers: [DataService, GeoService]
})
export class HomePage {
    constructor(private _dataService:DataService, private _geoService:GeoService, private _http:Http) {
    }

    title:string;
    transport;
    securite;
    meteo
    sante;
    position:Coordonnes;


    onPageLoaded() {
        console.log("Enter");
        this.title = "Feel your City";
        /*this._geoService.getCoordonnate().map(res => {
         this.position.lat = res.
         this.position.lon = res
         console.log(this.position);

         })*/

        console.log(this.position);

        this.getValues();
    }

    getColor(code:number):string {
        if (code < 25) {
            return "redbg";
        }
        else if (code < 50) {
            return "orangebg";
        }
        else if (code < 75) {
            return "limebg";
        }
        else
            return "greenbg";
    }

    plusOne(type) {
        console.log("PLUS : "+type);
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this._http.post('http://10.0.105.54:9000/api/' + type + '/up',JSON.stringify({lat:11,lng:11}), {
                headers: headers
            })
            .map((response:Response) => <any[]>response.json())
            .subscribe(data => {
                console.log('success');
                console.log(data);
            }, error => {
                console.log('error');
                console.log(error);
            });
      }


    minusOne(type) {
        console.log("MINUS : "+type);
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this._http.post('http://10.0.105.54:9000/api/' + type + '/down',JSON.stringify({lat:11,lng:11}), {
                headers: headers
            })
            .map((response:Response) => <any[]>response.json())
            .subscribe(data => {
                console.log('success');
                console.log(data);
            }, error => {
                console.log('error');
                console.log(error);
            });
    }

    getValues() {


        this.transport = this._dataService.getTransportValue().subscribe(
            data => {
                this.transport = this.getColor(data) + " tile two-v  tile-width no-padding";
                console.log(data)
            },
            err => console.error(err), //handle errors
            () => console.log('getPosts completed')
        )

        this.sante = this._dataService.getSanteValue().subscribe(
            data => {
                this.sante = this.getColor(data) + " tile two-v tile-width no-padding";
                console.log(data)
            },
            err => console.error(err), //handle errors
            () => console.log('getPosts completed')
        )


        this.securite = this._dataService.getSecuriteValue().subscribe(
            data => {
                this.securite = this.getColor(data) + " tile two-v tile-one tile-width";
                console.log(data)
            },
            err => console.error(err), //handle errors
            () => console.log('getPosts completed')
        )

        this.meteo = this._dataService.getMeteoValue().subscribe(
            data => {
                this.meteo = this.getColor(data) + " tile two-v tile-one tile-width";
                console.log(data)
            },
            err => console.error(err), //handle errors
            () => console.log('getPosts completed')
        )
    }

}
