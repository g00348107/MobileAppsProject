import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CharacterlistPageRoutingModule } from './characterlist-routing.module';

import { CharacterlistPage } from './characterlist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CharacterlistPageRoutingModule
  ],
  exports: [CharacterlistPage],
  declarations: [CharacterlistPage]
})
export class CharacterlistPageModule {}
