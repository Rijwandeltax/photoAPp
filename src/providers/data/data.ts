import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { ToastController } from 'ionic-angular';
/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {
  items: any;

  constructor( public http: Http, public toastCtrl  : ToastController) {}

  //About data retrive from database
  getDataAbout() {
      let type      : string   = "application/x-www-form-urlencoded; charset=UTF-8",
      headers   : any      = new Headers({ 'Content-Type': type}),
      options   : any      = new RequestOptions({ headers: headers });
      let data=JSON.stringify({keys:"aboutRetrive",memberId:"M7GMKH4J7N"});
      return new Promise(resolve =>{  this.http.post('http://rijwan.dexterwit.com/manage-data-mssql.php',data,options)
      .map(res => res.json())
      .subscribe(res => {
        resolve(res);
      }, err => { 
        console.log('Error: ', err);
        return [];
      });
    });
  }
  //Testimonial data retrive from database
  getDataTestimonial(){
    let type      : string   = "application/x-www-form-urlencoded; charset=UTF-8",
      headers   : any      = new Headers({ 'Content-Type': type}),
      options   : any      = new RequestOptions({ headers: headers });
      let data=JSON.stringify({keys:"testimonialRetrive",memberId:"M7GMKH4J7N"});
      return new Promise(resolve =>{  this.http.post('http://rijwan.dexterwit.com/manage-data-mssql.php',data,options)
      .map(res => res.json())
      .subscribe(res => {
        resolve(res);
        console.log(res);
      }, err => { 
        console.log('Error: ', err);
        return [];
      });
    }); 
  }
  //Contact data retrive from database
  getDataContact(){
    let type      : string   = "application/x-www-form-urlencoded; charset=UTF-8",
      headers   : any      = new Headers({ 'Content-Type': type}),
      options   : any      = new RequestOptions({ headers: headers });
      let data=JSON.stringify({keys:"contactRetrive",memberId:"M7GMKH4J7N"});
      return new Promise(resolve =>{  this.http.post('http://rijwan.dexterwit.com/manage-data-mssql.php',data,options)
      .map(res => res.json())
      .subscribe(res => {
        resolve(res);
      }, err => { 
        console.log('Error: ', err);
        resolve(err);
      });
    });
  }
  //Retrive data from database 
  getDatacategoryPhotos(){
    let type      : string   = "application/x-www-form-urlencoded; charset=UTF-8",
      headers   : any      = new Headers({ 'Content-Type': type}),
      options   : any      = new RequestOptions({ headers: headers });
      let data=JSON.stringify({keys:"portfolioImgCategory",memberId:"M7GMKH4J7N"});
      return new Promise(resolve =>{  this.http.post('http://rijwan.dexterwit.com/manage-data-mssql.php',data,options)
      .map(res => res.json())
      .subscribe(res => {
        resolve(res);
      }, err => { 
        console.log('Error: ', err);
        resolve(err); 
      });
    });
  }
  //Retrive data from database 
  gettblPortfolioImage(pid){
    let type      : string   = "application/x-www-form-urlencoded; charset=UTF-8",
      headers   : any      = new Headers({ 'Content-Type': type}),
      options   : any      = new RequestOptions({ headers: headers });
      let data=JSON.stringify({keys:"tblPortfolioImage",portfolioId:pid});
      return new Promise(resolve =>{  this.http.post('http://rijwan.dexterwit.com/manage-data-mssql.php',data,options)
      .map(res => res.json())
      .subscribe(res => {
        resolve(res);
      }, err => { 
        console.log('Error: ', err);
        resolve(err); 
      });
    });
  }
   //Retrive video data from database 
  getDataVideo(){
    let type      : string   = "application/x-www-form-urlencoded; charset=UTF-8",
      headers   : any      = new Headers({ 'Content-Type': type}),
      options   : any      = new RequestOptions({ headers: headers });
      let data=JSON.stringify({keys:"tblPortfolioVideo",memberId:"M7GMKH4J7N"});
      return new Promise(resolve =>{  this.http.post('http://rijwan.dexterwit.com/manage-data-mssql.php',data,options)
      .map(res => res.json())
      .subscribe(res => {
        resolve(res);
      }, err => { 
        console.log('Error: ', err);
        resolve(err); 
      });
    });
  }
   //Retrive video data from database 
   getDataAlbam(){
    let type      : string   = "application/x-www-form-urlencoded; charset=UTF-8",
      headers   : any      = new Headers({ 'Content-Type': type}),
      options   : any      = new RequestOptions({ headers: headers });
      let data=JSON.stringify({keys:"tblAlbum",userId:"BS80WNWC6C"});
      return new Promise(resolve =>{  this.http.post('http://rijwan.dexterwit.com/manage-data-mssql.php',data,options)
      .map(res => res.json())
      .subscribe(res => {
        resolve(res);
      }, err => { 
        console.log('Error: ', err);
        resolve(err); 
      });
    });
  }

  //Retrive video data from database 
  getFullAlbam(pid){
    let type    : string   = "application/x-www-form-urlencoded; charset=UTF-8",
      headers   : any      = new Headers({ 'Content-Type': type}),
      options   : any      = new RequestOptions({ headers: headers });
      let data=JSON.stringify({keys:"tblGalleryImage",AlbumId:pid});
      return new Promise(resolve =>{  this.http.post('http://rijwan.dexterwit.com/manage-data-mssql.php',data,options)
      .map(res => res.json())
      .subscribe(res => {
        resolve(res);
      }, err => { 
        console.log('Error: ', err);
        resolve(err); 
      });
    });
  }




  //Testimonial data post in database
  postDataTestionial(data){
    let type  : string   = "application/x-www-form-urlencoded; charset=UTF-8",
    headers   : any          = new Headers({ 'Content-Type': type}),
    options   : any          = new RequestOptions({ headers: headers });
     this.http.post('http://rijwan.dexterwit.com/manage-data-mssql.php',data,options)
    .map(res => res.json())
    .subscribe(res => {
      console.log(res);
     // resolve(res);
     this.sendNotification(`Congratulation the query inserted`);
    },(err) => {
      console.log(err); 
    });
  }
   //Query data post in database
   postDataQuery(data){
    let type      : string   = "application/x-www-form-urlencoded; charset=UTF-8",
      headers   : any      = new Headers({ 'Content-Type': type}),
      options   : any      = new RequestOptions({ headers: headers });
       this.http.post('http://rijwan.dexterwit.com/manage-data-mssql.php',data,options)
      .map(res => res.json())
      .subscribe(res => {
        console.log(res);
       // resolve(res);
       this.sendNotification(`Congratulation the query by:`);
      },(err) => {
        console.log(err); 
      });
  }
  postSecurityQuery(data){
    let type      : string   = "application/x-www-form-urlencoded; charset=UTF-8",
      headers   : any      = new Headers({ 'Content-Type': type}),
      options   : any      = new RequestOptions({ headers: headers });
      return new Promise(resolve =>{  this.http.post('http://rijwan.dexterwit.com/manage-data-mssql.php',data,options)
      .map(res => res.json())
      .subscribe(res => {
        console.log(res);
        resolve("200");
      }, err => { 
        console.log('Error: ', err);
        resolve(err); 
      });
    });
  }
  getSecurityData(userId){
    let type    : string   = "application/x-www-form-urlencoded; charset=UTF-8",
      headers   : any      = new Headers({ 'Content-Type': type}),
      options   : any      = new RequestOptions({ headers: headers });
      let data=JSON.stringify({keys:"tblUsers",UserId:userId});
      return new Promise(resolve =>{  this.http.post('http://rijwan.dexterwit.com/manage-data-mssql.php',data,options)
      .map(res => res.json())
      .subscribe(res => {
        resolve(res);
      }, err => { 
        console.log('Error: ', err);
        resolve(err); 
      });
    });
  }
   sendNotification(message)  : void
      {
         let notification = this.toastCtrl.create({
             message       : message,
             duration      : 3000
         });
         notification.present();
      }
}
