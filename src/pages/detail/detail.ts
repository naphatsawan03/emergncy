import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  id:any;
  name:string;
  tel:string;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.id=this.navParams.get('id');
    this.name=this.navParams.get('name');
    this.tel=this.navParams.get('tel');
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

}
