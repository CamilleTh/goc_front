import {Page, NavController} from 'ionic-angular';
import {DataService} from "../../services/data.service";
import {GeoService} from "../../services/geo.service";
import {Coordonnes} from "../../models/Coordonnes";

@Page({
    templateUrl: 'build/pages/home/home.html',
    styleUrls: ['/less/metro.less','/css/font-awesome.min.css'],
  providers: [DataService,GeoService]
})
export class HomePage {
  constructor(private _dataService:DataService,private _geoService:GeoService) {}

  title:string;
  transport;
  securite;
  meteo;
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

  getColor(code: number):string{
        if(code < 25){
            return "greenbg";
        }
        else if(code < 50){
          return "limebg";
        }
        else if(code < 75){
            return "orangebg";
        }
        else
            return "redbg";


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
