import { Component, Input, Output } from '@angular/core';
import { Customer } from '../../models/Customer';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-customer-list-element',
  standalone : false,
  templateUrl: './customer-list-element.component.html',
  styleUrl: './customer-list-element.component.css'
})
export class CustomerListElementComponent {

  @Input()
  customer : Customer = new Customer();

  @Output()  
  deleteCustomerEvent = new EventEmitter<Customer>();

  deleteCustomer(){
    console.log('kasuje cutomera')
    this.deleteCustomerEvent.emit(this.customer)
  }
}
