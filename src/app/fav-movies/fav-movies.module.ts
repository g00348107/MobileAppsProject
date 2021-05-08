import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavMoviesPageRoutingModule } from './fav-movies-routing.module';

import { FavMoviesPage } from './fav-movies.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavMoviesPageRoutingModule
  ],
  declarations: [FavMoviesPage]
})
export class FavMoviesPageModule {}
