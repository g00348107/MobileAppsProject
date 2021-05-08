import { BuiltinTypeName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {Storage} from '@ionic/storage';
import { Button } from 'selenium-webdriver';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
favCharacter:string;
favSeries:string;
isEnabled:boolean=false;
isWorking:boolean=false;
canUse:boolean=false;
  constructor(private storage:Storage) {}

  ngOnInit(){
   this.storage.get('character')
   .then((data)=>{
     this.favCharacter = data;
   })
   .catch()

   this.storage.get('series')
   .then((data)=>{
   this.favSeries = data;
   })
   .catch()
//This set of if statements checks the users favourite characters and series and allows them to click buttons based off their choices
   if((this.favCharacter == "skywalker" || this.favCharacter == "darthvader" || this.favCharacter == "leia") && this.favSeries.includes("Star Wars"))
   {
        this.isEnabled=true;

   }else if((this.favCharacter == "ironman" || this.favCharacter == "blackwidow" || this.favCharacter == "spiderman") && this.favSeries.includes("Avengers"))
   {
      this.isWorking=true;
   }else if((this.favCharacter == "batman" || this.favCharacter == "superman" || this.favCharacter == "aquaman") && this.favSeries.includes("Justice League"))
   {
      this.canUse=true;
   }
  }

}
