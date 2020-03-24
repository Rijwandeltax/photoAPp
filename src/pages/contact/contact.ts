import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http} from '@angular/http';
import { DataProvider } from './../../providers/data/data';
import {DomSanitizer, SafeUrl, SafeResourceUrl, SafeHtml} from '@angular/platform-browser';
@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {
  googlemap: SafeHtml;
  
  delta: {};
  developers: any;
  id: any='M7GMKH4J7N';
  constructor(public http: Http,public navCtrl: NavController, public navParams: NavParams,public data:DataProvider,public sanitizer:DomSanitizer) {
  }

  ionViewWillLoad() {
    this.contactQuery();
  }
  //retrive the Testimonial us data from dataProvider
  contactQuery(){
    this.data.getDataContact().then(data => {
        this.delta = data;
     
       this.googlemap = this.sanitizer.bypassSecurityTrustHtml(this.delta[0].GoogleMap);
        console.log(this.googlemap);
    }) 
  }

}
