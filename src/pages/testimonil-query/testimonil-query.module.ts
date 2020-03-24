import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TestimonilQueryPage } from './testimonil-query';
import {MatFormFieldModule, MatInputModule,MatIconModule,MatSelectModule} from '@angular/material';
import { HttpModule } from '@angular/http';
@NgModule({
  declarations: [
    TestimonilQueryPage,
  ],
  imports: [
    IonicPageModule.forChild(TestimonilQueryPage),
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    HttpModule
  ],
})
export class TestimonilQueryPageModule {}
