import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { Http, RequestOptions } from '@angular/http';
import { DataProvider } from '../../providers/data/data';
import { FormControl, Validators, FormGroup,FormBuilder } from '@angular/forms';
import { FileTransfer, FileTransferObject, FileUploadOptions } from '@ionic-native/file-transfer';
import { Camera, CameraOptions } from '@ionic-native/camera';

/**
 * Generated class for the TestimonilQueryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-testimonil-query',
  templateUrl: 'testimonil-query.html',
})
export class TestimonilQueryPage {
  imageFileName: string;
  imageURI: any;
  email: any;
  memberid: any='M7GMKH4J7N';
  items = [];
  selected = 'option2';
  userId:string='1hedh3hhs';
  public form                   : FormGroup;
  public name                   : any;
  public city                   : any;
  public message                : any;
  public profession             : any;
  
  constructor(public data:DataProvider,public navCtrl    : NavController,
    public http       : Http,
    public NP         : NavParams,
    public fb         : FormBuilder,
    public loadingCtrl: LoadingController,
    private transfer: FileTransfer,
    private camera: Camera,
    public toastCtrl: ToastController) {
        // Create form builder validation rules
        this.form = fb.group({
          "name"                  : ["",Validators.required],
          "message"               : ["",Validators.required],
          "city"                  : ["",Validators.required],
          "profession"            : ["",Validators.required],
          "rating"                : ["",Validators.required],
 
       });
    }
    //get the image
    getImage() {
      const options: CameraOptions = {
        quality: 100,
        destinationType: this.camera.DestinationType.FILE_URI,
        sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
      }
    
      this.camera.getPicture(options).then((imageData) => {
        this.imageURI = imageData;
      }, (err) => {
        console.log(err);
        this.presentToast(err);
      });
    }
    uploadFile() {
      let loader = this.loadingCtrl.create({
        content: "Uploading..."
      });
      loader.present();
      const fileTransfer: FileTransferObject = this.transfer.create();
    
      let options: FileUploadOptions = {
        fileKey: 'ionicfile',
        fileName: 'ionicfile',
        chunkedMode: false,
        mimeType: "image/jpeg",
        headers: {}
      }
    
      fileTransfer.upload(this.imageURI, 'http://localhost/upload.php', options)
        .then((data) => {
        console.log(data+" Uploaded Successfully");
      //  this.imageFileName = "http://192.168.0.7:8080/static/images/ionicfile.jpg"
        loader.dismiss();
        this.presentToast("Image uploaded successfully");
      }, (err) => {
        console.log(err);
        loader.dismiss();
        this.presentToast(err);
      });
    }
   
  //Save The review Form
 
    saveEntry()
    { 
      this.uploadFile();

      let name      : string   = this.form.controls["name"].value,
         city       : string   = this.form.controls["city"].value,
         profession : string   = this.form.controls["profession"].value,
         message    : string   = this.form.controls["message"].value,
         rating     : string   = this.form.controls["rating"].value;
       
         let type  : string   = "application/x-www-form-urlencoded; charset=UTF-8",
         headers   : any      = new Headers({ 'Content-Type': type}),
         options   : any      = new RequestOptions({ headers: headers });
 
      let dataa=JSON.stringify({keys:"testimonialPost",name:name,city:city,profession:profession,rating:rating,message:message,memberId:this.memberid,userId:this.userId});
      console.log(dataa);
    //  this.data.postDataQuery(dataa);
      }
      presentToast(msg) {
        let toast = this.toastCtrl.create({
          message: msg,
          duration: 3000,
          position: 'bottom'
        });
      
        toast.onDidDismiss(() => {
          console.log('Dismissed toast');
        });
      
        toast.present();
      }
    }