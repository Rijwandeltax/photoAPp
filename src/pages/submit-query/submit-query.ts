import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { Http, RequestOptions } from '@angular/http';
import { DataProvider } from '../../providers/data/data';
import { FormControl, Validators, FormGroup,FormBuilder } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-submit-query', 
  templateUrl: 'submit-query.html',
})
export class SubmitQueryPage {
  email: any;
  memberid: any='M7GMKH4J7N';
  items = [];
  selected = 'option2';
  public form                   : FormGroup;
  public name                   : any;
  public city                   : any;
  public message                : any;
  public mobile                 : any;
  public recordID               : any      = null;
  private baseURI               : string  = "http://www.jainbhajan.in/";
  //email = new FormControl('', [Validators.required, Validators.email]);
  
  constructor(public data:DataProvider,public navCtrl    : NavController,
    public http       : Http,
    public NP         : NavParams,
    public fb         : FormBuilder,
    public loadingCtrl: LoadingController,
    public toastCtrl  : ToastController) {
        // Create form builder validation rules
        this.form = fb.group({
          "name"                  : ["", Validators.required],
          "message"               : ["", Validators.required],
          "email"                  : ["", Validators.required],
          "mobile"                : ["",Validators.required],
          "typeo"                : ["",Validators.required]
       });
    }
    ionViewWillEnter()
    {
      
    }

  

   

     //Save The review Form
 
    saveEntry()
    { 
      let name      : string   = this.form.controls["name"].value,
         email      : string   = this.form.controls["email"].value,
         mobile     : string   = this.form.controls["mobile"].value,
         message    : string   = this.form.controls["message"].value,
         typeo      : string   = this.form.controls["typeo"].value;
       
         let type  : string   = "application/x-www-form-urlencoded; charset=UTF-8",
         headers   : any      = new Headers({ 'Content-Type': type}),
         options   : any      = new RequestOptions({ headers: headers });
 
      let dataa=JSON.stringify({keys:"queryPost",name:name,email:email,mobile:mobile,type:typeo,message:message,memberId:this.memberid});
      console.log(dataa);
      this.data.postDataQuery(dataa);
    /*  //console.log(data);
      this.http.post('http://www.jainbhajan.in/manage-data.php',data,options)
      .map(res => res.json())
      .subscribe(res => {
       this.sendNotification(`Congratulation the query by: ${name} was successfully added`);
      }, (err) => {
        console.log(err); 
       this.sendNotification('Something went wrong!');
      });
      this.navCtrl.setRoot(this.navCtrl.getActive().component);*/
      }
     
      sendNotification(message)  : void
      {
         let notification = this.toastCtrl.create({
             message       : message,
             duration      : 3000
         });
         notification.present();
      }
     
     
     
     
     
     
     
      /* //console.log('url');
      
      let name      : string   = this.form.controls["name"].value,
          email     : string   = this.form.controls["email"].value,
          // mobileno  : string   = '9636434242',//this.form.controls["mobileno"].value,
           message   : string   = this.form.controls["message"].value;
         //  mobileno  : string   = '9636434242';
       let body      : string   = "key=create&name=" + name + "&message=" + message + "&email=" + email + "&mobile=" + '9636434242',
 
           type      : string   = "application/x-www-form-urlencoded; charset=UTF-8",
           headers   : any      = new Headers({ 'Content-Type': type}),
           options   : any      = new RequestOptions({ headers: headers }),
           url       : any      = this.baseURI + "manage-data.php"; 
            
           //console.log(body);
 
 
 
           this.http.post(url, body, options).map(res => res.json())
           .subscribe(res => {
           alert("success "+res);
           console.log(res);
           }, (err) => {
           alert("failed");
           });
 
          /* .subscribe((data) =>
           {  
              // If the request was successful notify the user
              console.log(data.status);
         if(data.status === 200)
         {
    
            this.sendNotification(`Congratulations the technology: ${name} was successfully added`);
         }
         // Otherwise let 'em know anyway
         else
         {
            this.sendNotification('Something went wrong!');
         }
      });*/
}
