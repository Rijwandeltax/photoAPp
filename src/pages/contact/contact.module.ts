import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContactPage } from './contact';
import { HttpModule } from '@angular/http';
import { MatButtonModule, MatCardModule, MatTabsModule, MatChipsModule, MatIconModule,MatToolbarModule,MatSidenavModule } from "@angular/material";
@NgModule({
  declarations: [
    ContactPage,
  ],
  imports: [
    IonicPageModule.forChild(ContactPage),
    MatButtonModule,
    MatCardModule,
    MatTabsModule,
    MatChipsModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    HttpModule
  ],
})
export class ContactPageModule {}
