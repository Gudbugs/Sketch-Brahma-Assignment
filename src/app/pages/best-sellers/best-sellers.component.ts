import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-best-sellers',
  templateUrl: './best-sellers.component.html',
  styleUrls: ['./best-sellers.component.css']
})
export class BestSellersComponent implements OnInit {
  bestSellersData: any;

  constructor(private httpService: HttpService) {
    this.httpService.bestsellers()
  .subscribe(data => {
    console.log(data);
    this.bestSellersData=data.results;
    console.log("bestSellersData==",this.bestSellersData); 
  });
   }

  ngOnInit(): void {
    
  }

}
