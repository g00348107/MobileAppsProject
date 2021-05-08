import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'fav-movies',
    loadChildren: () => import('./fav-movies/fav-movies.module').then( m => m.FavMoviesPageModule)
  },
  {
    path: 'fav-characters',
    loadChildren: () => import('./fav-characters/fav-characters.module').then( m => m.FavCharactersPageModule)
  },
  {
    path: 'fav-series',
    loadChildren: () => import('./fav-series/fav-series.module').then( m => m.FavSeriesPageModule)
  },
  {
    path: 'characterlist',
    loadChildren: () => import('./characterlist/characterlist.module').then( m => m.CharacterlistPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
