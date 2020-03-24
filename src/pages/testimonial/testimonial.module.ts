import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TestimonialPage } from './testimonial';
import { HttpModule } from '@angular/http';
import {MatFormFieldModule, MatInputModule,MatIconModule,MatSelectModule} from '@angular/material';
@NgModule({
  declarations: [
    TestimonialPage,
  ],
  imports: [
    IonicPageModule.forChild(TestimonialPage),
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    HttpModule
  ],
})
export class TestimonialPageModule {}
