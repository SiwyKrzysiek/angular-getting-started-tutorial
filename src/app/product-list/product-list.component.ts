import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;

  constructor(private toast: ToastrService) {

  }

  share() {
    // window.alert('The product has been shared!');
    this.toast.success('The product has been shared!');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/