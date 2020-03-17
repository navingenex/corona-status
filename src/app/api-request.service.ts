import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, catchError} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ApiRequestService {

  constructor(private httpClient:HttpClient) { }


  getAll(){
    return this.httpClient.get('https://coronavirus-19-api.herokuapp.com/all').pipe(map(response=>response))
  }

  getAllCountry(){
    return this.httpClient.get('https://coronavirus-19-api.herokuapp.com/countries').pipe(
      map(response=>response),
      catchError(error=>error)
    )
  }
}
