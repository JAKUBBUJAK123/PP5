import { Invoice } from "./Invoice";
import { Customer } from "./Customer";
class Supplier extends Customer{
    accountNumber  = "";
    invoices: Invoice[] = [];
    constructor(){
        super();
    }
    
}