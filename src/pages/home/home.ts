import { Component } from '@angular/core';
import { NavController, LoadingController} from 'ionic-angular'; //added Loader
import {HttpProvider} from '../../providers/http/http'; //importing provider 

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[HttpProvider]
})


export class HomePage {

  eventData: any;
  loading: any;

  //injecting HttpProvider with angular 2 dependancy in ctor + Loader
  constructor(public navCtrl: NavController, private httpProvider:HttpProvider, public loadingCtrl: LoadingController) {

    this.loading = this.loadingCtrl.create({
      content: `
      <ion-spinner ></ion-spinner>`
    });

    this.getdata();
  }

getdata(){


this.httpProvider.getJsonData().subscribe(
  data => {
console.log(data);
this.eventData=JSON.parse(JSON.stringify(data));
console.log(this.eventData);

},
err =>{
console.error("Error : " +err);
},
() => {
console.log('getData completed');
}
);
}


}
