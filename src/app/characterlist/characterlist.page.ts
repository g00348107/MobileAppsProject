import { Component, OnInit } from '@angular/core';
import {Storage} from '@ionic/storage';
import {NavController} from '@ionic/angular';
@Component({
  selector: 'app-characterlist',
  templateUrl: './characterlist.page.html',
  styleUrls: ['./characterlist.page.scss'],
})
export class CharacterlistPage implements OnInit {
favCharacter:string = "No Character Selected";
  constructor(private storage:Storage, private navCtrl:NavController) { }

  ngOnInit() {
    this.storage.get("character")
    .then((data)=>{
      this.favCharacter=data;
    })
    .catch()
  }
//Saves the choice of the user
  updateCharacter(){
    this.storage.set('character',this.favCharacter)
    .then(()=>{
      this.navCtrl.navigateBack('/home');
    })
    .catch()
  }

}
