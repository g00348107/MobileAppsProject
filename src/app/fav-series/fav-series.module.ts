import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavSeriesPageRoutingModule } from './fav-series-routing.module';

import { FavSeriesPage } from './fav-series.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavSeriesPageRoutingModule
  ],
  declarations: [FavSeriesPage]
})
export class FavSeriesPageModule {}
