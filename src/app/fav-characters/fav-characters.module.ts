import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavCharactersPageRoutingModule } from './fav-characters-routing.module';

import { FavCharactersPage } from './fav-characters.page';
import {CharacterlistPageModule} from '../characterlist/characterlist.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavCharactersPageRoutingModule,
    CharacterlistPageModule
  ],
  declarations: [FavCharactersPage]
})
export class FavCharactersPageModule {}
