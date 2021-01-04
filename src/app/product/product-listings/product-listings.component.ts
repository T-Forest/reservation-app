import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';



@Component({
  selector: 'app-product-listings',
  templateUrl: './product-listings.component.html',
  styleUrls: ['./product-listings.component.scss']
})
export class ProductListComponent implements OnInit {

  constructor(private productService: ProductService) { }

  products: any;

  ngOnInit(): void {
    const productsObservable = this.productService.getProducts()
    productsObservable.subscribe(
      (data) => {
        this.products = data
      },
      (err) => {console.log('err')},
      // () => {console.log('complete')}　:不要。completeは正常なresponseならば必ず通過する。
    )
  }

}
