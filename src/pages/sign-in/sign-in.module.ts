import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignInPage } from './sign-in';
import {MatFormFieldModule, MatInputModule,MatIconModule,MatSelectModule,MatCheckboxModule} from '@angular/material';
import { HttpModule } from '@angular/http';
@NgModule({
  declarations: [
    SignInPage,
  ],
  imports: [
    IonicPageModule.forChild(SignInPage),
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    HttpModule,
    MatCheckboxModule
  ],
})
export class SignInPageModule {}
