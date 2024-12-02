import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InvoiceModule } from './invoice/invoice.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet , InvoiceModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Jakub Bujak';
}


