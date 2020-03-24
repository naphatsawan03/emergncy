import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetailPage } from '../detail/detail';

/**
 * Generated class for the FriendslistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-friendslist',
  templateUrl: 'friendslist.html',
})
export class FriendslistPage {
  allfriendslist = [
    {
      id:1,
      name:"xiumin",
      tel:"0998234345",
      image:"assets/imgs/xiumin.jpg",
    },
    {
      id:2,
      name:"kyungsoo",
      tel:"0965415441",
      image:"assets/imgs/kyungsoo.jpg",
    },
    {
      id:3,
      name:"chanyeol",
      tel:"0989870987",
      image:"assets/imgs/chanyeol.jpg",
    },
    {
      id:4,
      name:"baekhyun",
      tel:"0876543876",
      image:"assets/imgs/baekhyun.jpg",
    },
    {
      id:5,
      name:"sehun",
      tel:"0987654376",
      image:"assets/imgs/sehun.jpg",
    }
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  
  goToDetail(friend_id:any){
    let friend = this.allfriendslist.find(({id})=> id===friend_id);

    this.navCtrl.push(DetailPage,friend);
    
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad FriendslistPage');
  }

}
