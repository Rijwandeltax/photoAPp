import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from './../../providers/data/data';
import { Http} from '@angular/http';
import {DomSanitizer, SafeUrl, SafeResourceUrl} from '@angular/platform-browser';

@IonicPage()
@Component({
  selector: 'page-albam',
  templateUrl: 'albam.html',
})
export class AlbamPage {
  delta: {};
  id: any='M7GMKH4J7N';
  constructor(public http: Http,public navCtrl: NavController, public navParams: NavParams,public data:DataProvider,public sanitizer:DomSanitizer) {
    this.sanitizer=sanitizer;
  }

  ionViewDidLoad() {
    this.categortPhotos();
  }
  categortPhotos(){
    this.data.getDataAlbam().then(data => {
      this.delta = data;
      console.log(data);
    });
  }
  openSlide(pid){
    console.log(pid);
    this.navCtrl.push('FullAlbamPage',{'pid': pid});
  }

}
