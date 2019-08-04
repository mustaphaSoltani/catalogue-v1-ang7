import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CatalogueService} from "../services/catalogue.service";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  public currentProduct: Product;
  public url: String;

  constructor(private router: Router, private avtivatedRoute: ActivatedRoute, private catService: CatalogueService) {
  }

  ngOnInit() {
    this.url = atob(this.avtivatedRoute.snapshot.params.id);
    this.catService.getRessource(this.url)
      .subscribe(data => {
        this.currentProduct = data;
      }, err => {
        console.log(err);
      })
  }

  onUpdateProduct(value: any) {
    this.catService.updateRessource(this.url, value)
      .subscribe(data => {
        alert("mis à jour effectué avec succés");
      }, err => {
        console.log(err);
      })
  }
}
