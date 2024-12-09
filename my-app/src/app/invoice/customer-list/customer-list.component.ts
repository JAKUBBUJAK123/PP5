import { Component, OnDestroy, OnInit } from '@angular/core';
import { Customer } from '../models/Customer';
import { CustomerService } from '../services/customer.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-customer-list',
  standalone: false,
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.css'
})
export class CustomerListComponent implements OnInit , OnDestroy{
  customerList : Customer[] =[];

  constructor (
    private customerService:CustomerService,
    private router: Router
  ) {
    this.customerList = this.customerService.getCustomers();
  }

  ngOnDestroy() {
    console.log('opuszczam komonent');
  }

  ngOnInit(){
    this.customerList = this.customerService.getCustomers();
  }

  redirect(){
    this.router.navigate(['/invoice/customer-form']);
  }

  deleteCustomer(customer : Customer) {
    console.log(this.customerList)
    this.customerList = this.customerService.removeCustomert(customer);
    console.log(this.customerList)
  }

}
