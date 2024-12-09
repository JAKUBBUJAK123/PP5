export class Customer{

    name:string = "";
    nip:string = "";
    city:string = "";
    street:string = "";
    houseNumber:string = "";
    zipCode:string = "";
    comments:string = "";
    industry:string = "";
    active:boolean= false
    getAddress():string{
        return `${this.city} ${this.zipCode} ${this.street} ${this.houseNumber}`;
    }
    getCustomerInfo():string {
        return `${this.name} (${this.nip})`;
    }
}
