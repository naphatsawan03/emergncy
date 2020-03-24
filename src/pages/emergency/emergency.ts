import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EmergencyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-emergency',
  templateUrl: 'emergency.html',
})
export class EmergencyPage {
  allemergency = [
    {
      id:1,
      name:"ปอเต็กตึ้ง",
      tel:"1418",
      image:"assets/imgs/p.jpg",
    },
    {
      id:2,
      name:"ฉุกเฉิน",
      tel:"1669",
      image:"assets/imgs/e.jpg",
    },
    {
      id:3,
      name:"ดับเพลิง",
      tel:"199",
      image:"assets/imgs/d.jpg",
    },
    {
      id:4,
      name:"ไฟฟ้า",
      tel:"1130",
      image:"assets/imgs/f.jpg",
    },
    {
      id:5,
      name:"น้ำประปา",
      tel:"1125",
      image:"assets/imgs/n.jpg",
    },
    {
      id:6,
      name:"ตำรวจ",
      tel:"191",
      image:"assets/imgs/t.jpg",
    },
    {
      id:7,
      name:"สายด่วนทางหลวง",
      tel:"1193",
      image:"assets/imgs/w.jpg",
    },
    {
      id:8,
      name:"รถหาย",
      tel:"1192",
      image:"assets/imgs/a.jpg",
    },
  ]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmergencyPage');
  }

}
