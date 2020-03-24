import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from './../../providers/data/data';
import { Http} from '@angular/http';
import {DomSanitizer, SafeUrl, SafeResourceUrl} from '@angular/platform-browser';

/**
 * Generated class for the SliderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-slider',
  templateUrl: 'slider.html',
})
export class SliderPage {
  pid:string=this.navParams.get('pid');
  globalArray: any;
  delta: any;
  id: any='M7GMKH4J7N';
  constructor(public http: Http,public navCtrl: NavController, public navParams: NavParams,public data:DataProvider,public sanitizer:DomSanitizer) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SliderPage');
    console.log(this.pid);
    this.data.gettblPortfolioImage(this.pid).then(data => {

      for(let i=0; i < Object.keys(data).length; i++){ // n is array.length
          data[i].ImageUrl=this.sanitizer.bypassSecurityTrustResourceUrl('http://pa.dexterwit.com/'+data[i].ImageUrl);
      }
      this.delta=data;
        console.log(data);
  });
  }
      slider=[
        {
        title:'ionic Slider',
        image:"assets/imgs/ma.jpg"
        },
        {
          title:'ionic Slider',
          image:"assets/imgs/we.jpg"
        },
        {
          title:'ionic Slider',
          image:"assets/imgs/nin-live.png"
        }

      ]

}
