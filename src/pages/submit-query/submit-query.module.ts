import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SubmitQueryPage } from './submit-query';
import {MatFormFieldModule, MatInputModule,MatIconModule,MatSelectModule} from '@angular/material';
import { HttpModule } from '@angular/http';
@NgModule({
  declarations: [
    SubmitQueryPage,
  ],
  imports: [
    IonicPageModule.forChild(SubmitQueryPage),
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    HttpModule
  ],
})
export class SubmitQueryPageModule {}
