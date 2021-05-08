import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FavMoviesPage } from './fav-movies.page';

const routes: Routes = [
  {
    path: '',
    component: FavMoviesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FavMoviesPageRoutingModule {}
