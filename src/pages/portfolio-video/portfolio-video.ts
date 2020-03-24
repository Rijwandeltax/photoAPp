import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from './../../providers/data/data';
import { Http} from '@angular/http';
import {DomSanitizer, SafeUrl, SafeResourceUrl} from '@angular/platform-browser';

@IonicPage()
@Component({
  selector: 'page-portfolio-video',
  templateUrl: 'portfolio-video.html',
})
export class PortfolioVideoPage {
  globalArray: any;
  delta: any;
  id: any='M7GMKH4J7N';
  constructor(public http: Http,public navCtrl: NavController, public navParams: NavParams,public data:DataProvider,public sanitizer:DomSanitizer) {
    this.sanitizer=sanitizer;
  }

  ionViewDidLoad() {
    this.categortPhotos();
  }
  categortPhotos(){
    this.data.getDataVideo().then(data => {

        for(let i=0; i < Object.keys(data).length; i++){ // n is array.length
            data[i].VideoUrl=this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/'+data[i].VideoUrl);
        }
        this.delta=data;
          console.log(data);
    });
  }

}
