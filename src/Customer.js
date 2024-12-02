"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
var Customer = /** @class */ (function () {
    function Customer() {
        this.name = "";
        this.nip = "";
        this.city = "";
        this.street = "";
        this.houseNumber = "";
        this.zipCode = "";
        this.comments = "";
        this.industry = "";
        this.active = false;
    }
    Customer.prototype.getAddress = function () {
        return "".concat(this.city, " ").concat(this.zipCode, " ").concat(this.street, " ").concat(this.houseNumber);
    };
    Customer.prototype.getCustomerInfo = function () {
        return "".concat(this.name, " (").concat(this.nip, ")");
    };
    return Customer;
}());
exports.Customer = Customer;
