import { FilterPipe } from './filter.pipe';
import { ApiRequestService } from './api-request.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  allCountryData: any;
  country:string;
  loading:boolean;
  constructor(private apiRequest:ApiRequestService){}
  allData:any=[];
  ngOnInit(){
    this.getAllData();
    this.getAllCountry();
    
  }

  getAllData(){
    this.loading=true;
    this.apiRequest.getAll().subscribe((res:any)=>{
        this.allData=res;
        this.loading=false;
    });
  }

  getAllCountry(){
    this.loading=true;
    this.apiRequest.getAllCountry().subscribe((res:any)=>{
      this.allCountryData=res;
      this.loading=false;
    })
  }
}
