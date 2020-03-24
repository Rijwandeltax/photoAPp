import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlbamPage } from './albam';

@NgModule({
  declarations: [
    AlbamPage,
  ],
  imports: [
    IonicPageModule.forChild(AlbamPage),
  ],
})
export class AlbamPageModule {}
