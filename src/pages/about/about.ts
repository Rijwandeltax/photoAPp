import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from './../../providers/data/data';
import { Http} from '@angular/http';
import {DomSanitizer, SafeUrl, SafeResourceUrl} from '@angular/platform-browser';
@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {
  youtubeurl: string;
  YoutubeUrl: SafeResourceUrl;
  //YoutubeUrl: SafeUrl;
  url: string;
  delta: {};
  id: any='M7GMKH4J7N';
  constructor(public http: Http,public navCtrl: NavController, public navParams: NavParams,public data:DataProvider,public sanitizer:DomSanitizer) {
    this.sanitizer=sanitizer;
  }

  ionViewWillLoad() {
    this.aboutQuery();
  }
  //retrive the about us data from dataProvider
  aboutQuery(){
    this.data.getDataAbout().then(data => {
         this.delta = data;
     this.url = 'https://www.youtube.com/embed/'+data[0].FeaturedVideo;
     console.log(this.url);
      this.YoutubeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
     // console.log(this.YoutubeUrl);
    })  
  }
}
