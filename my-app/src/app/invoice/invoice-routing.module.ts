import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CustomerFormComponent } from './components/customer-form/customer-form.component';
import path from 'path';
import { CustomerListComponent } from './customer-list/customer-list.component';


const routes : Routes = [
  {path: 'customer-form', 
    component: CustomerFormComponent
  },
  {
    path: 'customer-list',
    component: CustomerListComponent
  }
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports : [RouterModule]
})
export class InvoiceRoutingModule { }
