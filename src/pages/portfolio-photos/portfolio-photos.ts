import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from './../../providers/data/data';
import { Http} from '@angular/http';
import {DomSanitizer, SafeUrl, SafeResourceUrl} from '@angular/platform-browser';

@IonicPage()
@Component({
  selector: 'page-portfolio-photos',
  templateUrl: 'portfolio-photos.html',
})
export class PortfolioPhotosPage {
  delta: {};
  id: any='M7GMKH4J7N';
  constructor(public http: Http,public navCtrl: NavController, public navParams: NavParams,public data:DataProvider,public sanitizer:DomSanitizer) {
    this.sanitizer=sanitizer;
  }

  ionViewDidLoad() {
    this.categortPhotos();
  }
  openSlide(pid){
    console.log(pid);
    //alert("check");
    this.navCtrl.push('SliderPage',{'pid': pid});
  }
  categortPhotos(){
    this.data.getDatacategoryPhotos().then(data => {
      this.delta = data;
      console.log(data);
    });
  }

}
