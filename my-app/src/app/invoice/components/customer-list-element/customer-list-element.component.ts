import { Component, Input } from '@angular/core';
import { Customer } from '../../models/Customer';

@Component({
  selector: 'app-customer-list-element',
  standalone : false,
  templateUrl: './customer-list-element.component.html',
  styleUrl: './customer-list-element.component.css'
})
export class CustomerListElementComponent {

  @Input()
  customer : Customer = new Customer();
  

}
