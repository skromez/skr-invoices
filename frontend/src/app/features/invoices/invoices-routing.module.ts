import { NgModule } from '@angular/core';
import { Route, RouterModule } from "@angular/router";
import { InvoiceListComponent } from "./components/invoice-list/invoice-list.component";
import { InvoiceDetailsComponent } from "./components/invoice-details/invoice-details.component";

const routes: Route[] = [
  { path: '', component: InvoiceListComponent },
  { path: 'details', component: InvoiceDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoicesRoutingModule { }
