import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductFormComponentComponent } from './product-form-component/product-form-component.component';



@NgModule({
  declarations: [ProductFormComponentComponent],
  exports : [ProductFormComponentComponent],
  imports: [
    CommonModule
  ]
})
export class ProductModuleModule { }
