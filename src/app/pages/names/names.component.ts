import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-names',
  templateUrl: './names.component.html',
  styleUrls: ['./names.component.css']
})
export class NamesComponent implements OnInit {
  names: any;

  constructor(private httpService: HttpService) { 
    this.httpService.names()
  .subscribe(data => {
    console.log(data);
    this.names=data.results;
    console.log("names==",this.names); 
  });
  }

  ngOnInit(): void {
  }

}
