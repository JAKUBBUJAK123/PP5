import { Component } from '@angular/core';
import { Customer } from '../models/Customer';
import { CustomerService } from '../services/customer.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-customer-list',
  standalone: false,
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.css'
})
export class CustomerListComponent {
  customerList : Customer[] =[];

  constructor (
    private customerService:CustomerService,
    private router: Router
  ) {
    this.customerList = this.customerService.getCustomers();
  }

}
