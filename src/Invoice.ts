import { Unit } from "./Unit";
import { Tax } from "./Tax";
export class Invoice{

    CompanyName: string = '';
    quantity: number = 0;
    unit?: Unit;
    netto?: number;
    tax?: Tax;
    brutto?: number;
}
