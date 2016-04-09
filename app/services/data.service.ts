import {Injectable} from "angular2/core";
import 'rxjs/Rx';
import {Http, Response} from "angular2/http";
import {Observable} from "rxjs/Observable";


@Injectable()
export class DataService {
    constructor(private _http:Http) {}

    public transport:number = 0;

    public getTransportValue():Observable<number>{
        return Observable
            .interval(2000)
            .mergeMap(() => this._http.get('http://10.0.105.54:9000/api/transport?lat=11&lng=11')
            .map(res => <number>res.json()));
      //   return this._http.get('http://10.0.105.54:9000/api/transport?lat=11&lng=11')
      //     .map(res => <number>res.json())
    }

    public getMeteoValue():Observable<number>{
        return Observable
            .interval(2000)
            .mergeMap(() => this._http.get('http://10.0.105.54:9000/api/weather?lat=11&lng=11')
                .map(res => <number>res.json()));
    }

    public getSanteValue():Observable<number>{
        return Observable
            .interval(2000)
            .mergeMap(() => this._http.get('http://10.0.105.54:9000/api/health?lat=11&lng=11')
                .map(res => <number>res.json()));
    }

    public getSecuriteValue():Observable<number>{
        return Observable
            .interval(2000)
            .mergeMap(() => this._http.get('http://10.0.105.54:9000/api/security?lat=11&lng=11')
                .map(res => <number>res.json()));
    }

}