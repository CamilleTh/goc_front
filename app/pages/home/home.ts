import {Page, NavController} from 'ionic-angular';
import {DataService} from "../../services/data.service";
import {GeoService} from "../../services/geo.service";
import {Coordonnes} from "../../models/Coordonnes";

@Page({
  templateUrl: 'build/pages/home/home.html',
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
      this.title = "Fell your City";
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
            return "redbg tile two-v   tile-width";
        }
        else if(code < 50){
          return "orangebg tile two-v   tile-width";
        }
        else if(code < 75){
            return "bluebg tile two-v   tile-width";
        }
        else
            return "greenbg tile two-v   tile-width";


  }

  getValues() {


    this.transport = this._dataService.getTransportValue().subscribe(
        data => {
          this.transport = this.getColor(data);
          console.log(data)
        },
        err => console.error(err), //handle errors
        () => console.log('getPosts completed')
    )

    this.sante = this._dataService.getSanteValue().subscribe(
        data => {
          this.sante = this.getColor(data);
          console.log(data)
        },
        err => console.error(err), //handle errors
        () => console.log('getPosts completed')
    )


    this.securite = this._dataService.getSecuriteValue().subscribe(
        data => {
          this.securite = this.getColor(data);
          console.log(data)
        },
        err => console.error(err), //handle errors
        () => console.log('getPosts completed')
    )

    this.meteo = this._dataService.getMeteoValue().subscribe(
        data => {
          this.meteo = this.getColor(data);
          console.log(data)
        },
        err => console.error(err), //handle errors
        () => console.log('getPosts completed')
    )
  }

}
