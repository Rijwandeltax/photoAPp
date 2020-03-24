import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PortfolioPhotosPage } from './portfolio-photos';
import { MatButtonModule, MatCardModule, MatTabsModule, MatChipsModule, MatIconModule,MatToolbarModule,MatSidenavModule } from "@angular/material";
@NgModule({
  declarations: [
    PortfolioPhotosPage,
  ],
  imports: [
    IonicPageModule.forChild(PortfolioPhotosPage),
    MatButtonModule,
    MatCardModule,
    MatTabsModule,
    MatChipsModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule
  ],
})
export class PortfolioPhotosPageModule {}
