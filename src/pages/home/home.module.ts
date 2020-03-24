import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';

import { MatButtonModule, MatCardModule, MatTabsModule, MatChipsModule, MatIconModule,MatToolbarModule,MatSidenavModule } from "@angular/material";

@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
    MatButtonModule,
    MatCardModule,
    MatTabsModule,
    MatChipsModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule
  ],
  exports: [
    HomePage
  ]
})
export class HomePageModule {}