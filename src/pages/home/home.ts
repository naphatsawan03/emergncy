import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FriendslistPage } from '../friendslist/friendslist';
import { EmergencyPage } from '../emergency/emergency';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
    goToFriendslist(){
      this.navCtrl.push(FriendslistPage);
    }
    goToEmergency(){
      this.navCtrl.push(EmergencyPage);
    }
    

}
