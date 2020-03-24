import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController,Nav, Events } from 'ionic-angular';
import { Http, RequestOptions } from '@angular/http';
import { DataProvider } from '../../providers/data/data';
import { SigninProvider } from '../../providers/signin/signin';
import { FormControl, Validators, FormGroup,FormBuilder } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',
})
export class SignInPage {
  @ViewChild(Nav) nav: Nav;
  dataa: string;
  hide = true;
  public form                   : FormGroup;
  public mobile                 : any;
  
  constructor(public data:DataProvider,public navCtrl    : NavController,
    public http       : Http,
    public NP         : NavParams,
    public fb         : FormBuilder,
    public loadingCtrl: LoadingController,
    public toastCtrl  : ToastController,public service:SigninProvider,private events: Events) {
        // Create form builder validation rules
        this.form = fb.group({
          "mobile"                : ["", Validators.required],
          "password"              : ["", Validators.required]
         
       });
    }
    ionViewWillLoad() {
      //this.service.getData().then(data => {
        //this.delta = data;
   // })
  }
  getdata(){
    this.service.getData().then(data=>{
      alert(data);
    });
  }


                  //Save The review Form
    saveEntry()
    { 
      let mobile     : string   = this.form.controls["mobile"].value,
         password   : string    =this.form.controls["password"].value
         let type   : string   = "application/x-www-form-urlencoded; charset=UTF-8",
         headers    : any      = new Headers({ 'Content-Type': type}),
         options    : any      = new RequestOptions({ headers: headers });
        
           this.dataa=JSON.stringify({keys:"signin",mobile:mobile,password:password});
               console.log(this.dataa);
               this.events.publish('user:login');
               this.service.save(mobile,password).then(data=>{
                alert(data);
                if(data==200){
                  this.navCtrl.setRoot('AlbamPage');
                }
                else{
                  this.navCtrl.setRoot('SignInPage');
                }
              });
             
            }
             
               /*this.data.postSecurityQuery(this.dataa).then(data=>{
                  if(data=="200"){
                    this.service.save(mobile,password);
                  }
                  else{
                    alert("something went wrong");
                  }
              })*/
         
  
      
    }