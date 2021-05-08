import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../Services/movies.service';
@Component({
  selector: 'app-fav-movies',
  templateUrl: './fav-movies.page.html',
  styleUrls: ['./fav-movies.page.scss'],
})
export class FavMoviesPage implements OnInit {
StarWarsData:any = [];
AvengersData:any = [];
JusticeLeagueData:any = [];
  constructor(private movieService:MoviesService) { }

  ngOnInit() {//Searches through the data found in each Search method and displays the Movie data
    this.movieService.GetStarWarsData().subscribe(
      (data)=>{
       this.StarWarsData = data.Search;
       console.log(this.StarWarsData);

       
      }
    );

    this.movieService.GetAvengersData().subscribe(
      (data)=>{
       this.AvengersData = data.Search;
       console.log(this.AvengersData);

       
      }
    );

    this.movieService.GetJusticeLeagueData().subscribe(
      (data)=>{
       this.JusticeLeagueData = data.Search;
       console.log(this.JusticeLeagueData);

       
      }
    );


  }

}
