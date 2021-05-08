import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FavCharactersPage } from './fav-characters.page';

const routes: Routes = [
  {
    path: '',
    component: FavCharactersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FavCharactersPageRoutingModule {}
