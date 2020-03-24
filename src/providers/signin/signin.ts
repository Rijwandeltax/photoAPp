import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { ToastController } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';

@Injectable()
export class SigninProvider {

  constructor(public http: Http, public toastCtrl:ToastController,private nativeStorage: NativeStorage) {
    console.log('Hello SigninProvider Provider');
  }
  save(name,email,mobile,password){
        return new Promise(resolve =>{   this.nativeStorage.setItem('useritem', {name: name,email:email,password: password,mobile:mobile})
        .then(
          () => {
            resolve(200)
          }, err => { 
            console.log('error');
          });
      });
  }
  getData(){
        return new Promise(resolve =>{   this.nativeStorage.getItem('myitem')
      .then(
        data =>{
          resolve('rijwan password')
        }, err => { 
          alert('error');
        });
      });
  }
  removeData(){
    this.nativeStorage.remove('myitem')
    .then(
      data=>alert('data remove'),
      error=>alert('error'),
    );
  }
  getset(mobile,password){
    this.nativeStorage.remove('myitem')
    .then(
      data=>this.save(mobile,password),//alert('data remove'),
      error=>alert('error'),
    );
  }
}
