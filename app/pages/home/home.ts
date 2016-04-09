import {Page, NavController} from 'ionic-angular';
import {DataService} from "../../services/data.service";

@Page({
  templateUrl: 'build/pages/home/home.html',
  providers: [DataService]
})
export class HomePage {
  constructor(private _dataService:DataService) {}

  title:string;
  transport;
  securite;
  meteo;
  sante;


  onPageLoaded() {
    console.log("Enter");
    this.title = "Fell your City";
    getValues();
  }

  getValues() {


    this.transport = this._dataService.getTransportValue().subscribe(
        data => {
          this.transport = data;
          console.log(data)
        },
        err => console.error(err), //handle errors
        () => console.log('getPosts completed')
    )

    this.sante = this._dataService.getSanteValue().subscribe(
        data => {
          this.sante = data;
          console.log(data)
        },
        err => console.error(err), //handle errors
        () => console.log('getPosts completed')
    )


    this.securite = this._dataService.getSecuriteValue().subscribe(
        data => {
          this.securite = data;
          console.log(data)
        },
        err => console.error(err), //handle errors
        () => console.log('getPosts completed')
    )

    this.meteo = this._dataService.getMeteoValue().subscribe(
        data => {
          this.meteo = data;
          console.log(data)
        },
        err => console.error(err), //handle errors
        () => console.log('getPosts completed')
    )
  }

}
