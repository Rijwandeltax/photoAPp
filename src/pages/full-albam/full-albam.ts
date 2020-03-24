import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from './../../providers/data/data';
import { Http} from '@angular/http';
import {DomSanitizer, SafeUrl, SafeResourceUrl} from '@angular/platform-browser';

@IonicPage()
@Component({
  selector: 'page-full-albam',
  templateUrl: 'full-albam.html',
})
export class FullAlbamPage {
  pid:string=this.navParams.get('pid');
  globalArray: any;
  delta: any;
  id: any='M7GMKH4J7N';
  constructor(public http: Http,public navCtrl: NavController, public navParams: NavParams,public data:DataProvider,public sanitizer:DomSanitizer) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad myPage');
    console.log(this.pid);
    this.data.getFullAlbam(this.pid).then(data => {

      for(let i=0; i < Object.keys(data).length; i++){ // n is array.length
          data[i].ImageUrl=this.sanitizer.bypassSecurityTrustResourceUrl('http://pa.dexterwit.com/'+data[i].ImageURL);
      }
      this.delta=data;
        console.log(data);
    });
  }
}
