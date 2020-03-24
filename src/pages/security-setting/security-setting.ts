import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { Http, RequestOptions } from '@angular/http';
import { DataProvider } from '../../providers/data/data';
import { SigninProvider } from '../../providers/signin/signin';
import { FormControl, Validators, FormGroup,FormBuilder } from '@angular/forms'; 

/**
 * Generated class for the SecuritySettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-security-setting',
  templateUrl: 'security-setting.html',
})
export class SecuritySettingPage {
  delta: {};
  userId: any;
  dataa: string;
  hide = true;
  email: any;
  userid: any='BS80WNWC6C';
  items = [];
  checked = false;
  public form                   : FormGroup;
  public name                   : any;
  public city                   : any;
  public message                : any;
  public mobile                 : any;
  
  constructor(public data:DataProvider,public navCtrl    : NavController,
    public http       : Http,
    public NP         : NavParams,
    public fb         : FormBuilder,
    public loadingCtrl: LoadingController,
    public toastCtrl  : ToastController,public service:SigninProvider) {
        // Create form builder validation rules
        this.form = fb.group({
          "name"                  : ["", Validators.required],
          "email"                 : ["", Validators.required],
          "mobile"                : ["", Validators.required],
          "password"              : [""],
          "checked"               : [""]
       });
    }


    ionViewDidLoad() {
      this.userId='BS80WNWC6C';
      this.data.getSecurityData(this.userId).then(data => {
        this.delta=data;
          console.log(data);
    });
    }

                  //Save The review Form
    saveEntry()
    { 
      let name      : string   = this.form.controls["name"].value,
         email      : string   = this.form.controls["email"].value,
         mobile     : string   = this.form.controls["mobile"].value,
         password   : string    =this.form.controls["password"].value
         let type   : string   = "application/x-www-form-urlencoded; charset=UTF-8",
         headers    : any      = new Headers({ 'Content-Type': type}),
         options    : any      = new RequestOptions({ headers: headers });
         if(this.checked){
           this.dataa=JSON.stringify({keys:"securitywithpassword",email:email,mobile:mobile,password:password,userId:this.userid});
           this.service.getset(mobile,password);
         }
         else{
           this.dataa=JSON.stringify({keys:"securitywithoutpassword",email:email,mobile:mobile,userId:this.userid});
         }
          
     
               console.log(this.dataa);
               this.data.postSecurityQuery(this.dataa);
  
      }
    }