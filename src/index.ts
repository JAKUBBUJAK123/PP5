import { Customer } from "./Customer";

const customersList:Customer[] = [];

function getElementById<T extends HTMLElement>(id:string) {
  const element = document.getElementById(id)
  return element as T;
}


function showCustomer(): void {
  let customerList = getElementById<HTMLUListElement>("customer-data");
  customerList.innerHTML = '';
  customersList.forEach((customer) => {
    let listItem = document.createElement('li');
    listItem.className = 'list-group-item';
    listItem.innerText = customer.getCustomerInfo();
    listItem.onclick = () => {
      showForm();
      loadClient(customer.nip)
    }
  });
}

function showForm(): void{
  getElementById("client-form").style.display = "block";
  getElementById("client-list").style.display = "none";
}

function showList(): void{
  getElementById("client-form").style.display = "none";
  getElementById("client-list").style.display = "block";
}

function save(event : Event) : void {
  event.preventDefault();
  const newCustomer = new Customer();
  newCustomer.name = getElementById<HTMLInputElement>("company-name").value;
  newCustomer.nip = getElementById<HTMLInputElement>("nip").value;
  newCustomer.city = getElementById<HTMLInputElement>("city").value;
  newCustomer.street = getElementById<HTMLInputElement>("street").value;
  newCustomer.houseNumber = getElementById<HTMLInputElement>("house-number").value;
  newCustomer.zipCode = getElementById<HTMLInputElement>("zipcode").value;
  newCustomer.comments = getElementById<HTMLInputElement>("comments").value;
  newCustomer.industry = getElementById<HTMLInputElement>("industry").value;
  newCustomer.active = getElementById<HTMLInputElement>("active").checked;

  console.log(newCustomer)

  const existingIndex = customersList.findIndex((customer) => customer.nip === newCustomer.nip);
  if (existingIndex > -1) {
    customersList[existingIndex] = newCustomer;
  } else {
    customersList.push(newCustomer);
  }

  showList();
  showCustomer();
}

function loadClient(nip : string) : void {
  const customer:Customer =  customersList.find((c) => c.nip === nip) || new Customer() 

  getElementById<HTMLInputElement>("company-name").value = customer.name;
  getElementById<HTMLInputElement>("nip").value = customer.nip
  getElementById<HTMLInputElement>("city").value = customer.city
  getElementById<HTMLInputElement>("street").value = customer.street
  getElementById<HTMLInputElement>("house-number").value = customer.houseNumber
  getElementById<HTMLInputElement>("zipcode").value = customer.zipCode
  getElementById<HTMLInputElement>("comments").value = customer.comments
  getElementById<HTMLInputElement>("industry").value = customer.industry
  getElementById<HTMLInputElement>("active").checked = customer.active
}

document.querySelector("form")?.addEventListener("submit", save);
