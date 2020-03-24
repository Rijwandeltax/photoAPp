import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FormControl, Validators} from '@angular/forms';
import { Http} from '@angular/http';
import { DataProvider } from './../../providers/data/data';

@IonicPage()
@Component({
  selector: 'page-testimonial',
  templateUrl: 'testimonial.html',
})
export class TestimonialPage {
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  delta: {};
  id: any='M7GMKH4J7N';

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }
  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  constructor(public http: Http,public navCtrl: NavController, public navParams: NavParams,public data:DataProvider) {
  }

  ionViewWillLoad() {
    this.testimonialQuery();
  }
  //retrive the Testimonial us data from dataProvider
  testimonialQuery(){
    this.data.getDataTestimonial().then(data => {
        this.delta = data;
        console.log(data);
    }) 
  }

}
