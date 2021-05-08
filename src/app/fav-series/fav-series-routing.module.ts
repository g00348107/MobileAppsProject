import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FavSeriesPage } from './fav-series.page';

const routes: Routes = [
  {
    path: '',
    component: FavSeriesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FavSeriesPageRoutingModule {}
