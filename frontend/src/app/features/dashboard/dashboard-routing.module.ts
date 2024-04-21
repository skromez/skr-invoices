import { NgModule } from '@angular/core';
import { Route, RouterModule } from "@angular/router";
import { StatisticsComponent } from "./components/statistics/statistics.component";

const routes: Route[] = [
  { path: '', component: StatisticsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
