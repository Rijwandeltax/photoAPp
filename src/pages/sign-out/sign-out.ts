import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,Nav, Events } from 'ionic-angular';
import { SigninProvider } from '../../providers/signin/signin';
/**
 * Generated class for the SignOutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-out',
  templateUrl: 'sign-out.html',
})
export class SignOutPage {
  @ViewChild(Nav) nav: Nav;
  constructor(public navCtrl: NavController, public navParams: NavParams,public service:SigninProvider,private events: Events) {
  }

  ionViewDidLoad() {
    this.events.publish('user:logout');
      this.service.removeData();
      this.navCtrl.setRoot('HomePage');
  }

}
