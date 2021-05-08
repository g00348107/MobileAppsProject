import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private httpClient:HttpClient) { }

  GetAvengersData():Observable<any>{
    return this.httpClient.get('http://www.omdbapi.com/?s=avengers&apikey=fba72c20')
  }

  GetStarWarsData():Observable<any>{
    return this.httpClient.get("http://www.omdbapi.com/?s=star wars&apikey=fba72c20")
  }

  GetJusticeLeagueData():Observable<any>{
    return this.httpClient.get("http://www.omdbapi.com/?s=justice league&apikey=fba72c20")
  }
}
