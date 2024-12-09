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

  removeCustomert(customer:Customer) {
    this.customersList = this.customersList.filter((x:Customer) => {
      return x.nip !== customer.nip
    })
    console.log(this.customersList)
    return this.customersList;
  }
  
}
