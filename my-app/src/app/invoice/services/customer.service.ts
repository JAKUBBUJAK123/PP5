import { Injectable } from '@angular/core';
import { Customer } from '../models/Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() { }

  customersList : Customer[] = [];

  addCustomer(customer : Customer){
    this.customersList.push(customer);
    console.log(this.customersList)
  }

  getCustomers() : Customer[] {
    return this.customersList ;
  }
}
