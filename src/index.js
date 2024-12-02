"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var Customer_1 = require("./Customer");
var customersList = [];
function getElementById(id) {
    var element = document.getElementById(id);
    return element;
}
function showCustomer() {
    var customerList = getElementById("customer-data");
    customerList.innerHTML = '';
    customersList.forEach(function (customer) {
        var listItem = document.createElement('li');
        listItem.className = 'list-group-item';
        listItem.innerText = customer.getCustomerInfo();
        listItem.onclick = function () {
            showForm();
            loadClient(customer.nip);
        };
    });
}
function showForm() {
    getElementById("client-form").style.display = "block";
    getElementById("client-list").style.display = "none";
}
function showList() {
    getElementById("client-form").style.display = "none";
    getElementById("client-list").style.display = "block";
}
function save(event) {
    event.preventDefault();
    var newCustomer = new Customer_1.Customer();
    newCustomer.name = getElementById("company-name").value;
    newCustomer.nip = getElementById("nip").value;
    newCustomer.city = getElementById("city").value;
    newCustomer.street = getElementById("street").value;
    newCustomer.houseNumber = getElementById("house-number").value;
    newCustomer.zipCode = getElementById("zipcode").value;
    newCustomer.comments = getElementById("comments").value;
    newCustomer.industry = getElementById("industry").value;
    newCustomer.active = getElementById("active").checked;
    console.log(newCustomer);
    var existingIndex = customersList.findIndex(function (customer) { return customer.nip === newCustomer.nip; });
    if (existingIndex > -1) {
        customersList[existingIndex] = newCustomer;
    }
    else {
        customersList.push(newCustomer);
    }
    showList();
    showCustomer();
}
function loadClient(nip) {
    var customer = customersList.find(function (c) { return c.nip === nip; }) || new Customer_1.Customer();
    getElementById("company-name").value = customer.name;
    getElementById("nip").value = customer.nip;
    getElementById("city").value = customer.city;
    getElementById("street").value = customer.street;
    getElementById("house-number").value = customer.houseNumber;
    getElementById("zipcode").value = customer.zipCode;
    getElementById("comments").value = customer.comments;
    getElementById("industry").value = customer.industry;
    getElementById("active").checked = customer.active;
}
(_a = document.querySelector("form")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", save);
