import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SecuritySettingPage } from './security-setting';
import {MatFormFieldModule, MatInputModule,MatIconModule,MatSelectModule,MatCheckboxModule} from '@angular/material';
import { HttpModule } from '@angular/http';
@NgModule({
  declarations: [
    SecuritySettingPage,
  ],
  imports: [
    IonicPageModule.forChild(SecuritySettingPage),
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    HttpModule,
    MatCheckboxModule
  ],
})
export class SecuritySettingPageModule {}
