import { Component, OnInit } from '@angular/core';
import {Storage} from '@ionic/storage';
import {NavController} from '@ionic/angular';
@Component({
  selector: 'app-fav-series',
  templateUrl: './fav-series.page.html',
  styleUrls: ['./fav-series.page.scss'],
})
export class FavSeriesPage implements OnInit {
  favSeries:string = "No Series Selected";
  constructor(private storage:Storage, private navCtrl:NavController) { }

  ngOnInit() {
    this.storage.get("series")
    .then((data)=>{
      this.favSeries=data;
    })
    .catch()
  }

  updateSeries(){
    this.storage.set('series',this.favSeries)
    .then(()=>{
      this.navCtrl.navigateBack('/home');
    })
    .catch()
  }

}
