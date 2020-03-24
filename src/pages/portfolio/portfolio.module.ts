import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PortfolioPage } from './portfolio';
import { MatButtonModule, MatCardModule, MatTabsModule, MatChipsModule, MatIconModule,MatToolbarModule,MatSidenavModule } from "@angular/material";
@NgModule({
  declarations: [
    PortfolioPage,
  ],
  imports: [
    IonicPageModule.forChild(PortfolioPage),
    MatButtonModule,
    MatCardModule,
    MatTabsModule,
    MatChipsModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule
  ],
})
export class PortfolioPageModule {}
