import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BestSellersComponent} from'./pages/best-sellers/best-sellers.component';
import {NamesComponent} from'./pages/names/names.component';
import {OverviewComponent} from'./pages/overview/overview.component';

const routes: Routes = [
  { path: '',   redirectTo: 'bestSellers', pathMatch: 'full' },
  { path: 'bestSellers', component: BestSellersComponent },
  { path: 'names', component: NamesComponent },
  { path: 'overview', component: OverviewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
