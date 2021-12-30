import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  overview: any;
  lists: any;

  constructor(private httpService: HttpService) { 
    this.httpService.overview()
  .subscribe(data => {
    console.log(data);
    this.overview=data.results;
    this.lists=this.overview.lists;
    console.log("overview==",this.overview); 
    console.log("lists==",this.lists); 
  });
  }

  ngOnInit(): void {
  }

}
