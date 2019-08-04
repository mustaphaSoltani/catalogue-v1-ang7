import {Component, OnInit} from '@angular/core';
import {CatalogueService} from "../services/catalogue.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  public currentProduct: Product;
  public mode: number = 1;

  constructor(private catalogueservice: CatalogueService, private router: Router) {
  }

  ngOnInit() {
  }

  onSaveProduct(data: any) {
    this.catalogueservice.addProduct(this.catalogueservice.host + "/produits", data)
      .subscribe(res => {
        //this.router.navigateByUrl("/product");
        this.currentProduct = res;
        this.mode = 2;
      }, err => {
        console.log(err);
      });
  }
}
