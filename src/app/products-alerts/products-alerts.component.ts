import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-products-alerts',
  templateUrl: './products-alerts.component.html',
  styleUrls: ['./products-alerts.component.css']
})
export class ProductsAlertsComponent {

  @Input() product?: Product;
  @Output() notify = new EventEmitter();
}
