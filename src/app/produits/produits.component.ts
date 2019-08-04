import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CatalogueService} from "../services/catalogue.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
  public prod: any;
  public size: number = 5;
  public currentPage: number = 0;
  public totalPage: number;
  public pages: Array<number>;
  public currentKeyword: String;

  constructor(private catservice: CatalogueService,private router:Router) {
  }

  ngOnInit() {
  }

  onGetProduct() {
    this.catservice.getProduits(this.currentPage, this.size)
      .subscribe(data => {
          this.totalPage = data["page"].totalPages;
          this.pages = new Array<number>(this.totalPage);
          this.prod = data;
        }, err => {
          console.log(err);
        }
      )
  }

  onPageProduct(i) {
    this.currentPage = i;
    this.chercherProduits();
  }

  onChercher(form: any) {
    this.currentPage = 0;
    this.currentKeyword = form.keyword;
    this.chercherProduits();
  }

  chercherProduits() {
    this.catservice.getProduitsByKeyword(this.currentKeyword, this.currentPage, this.size)
      .subscribe(data => {
          this.totalPage = data["page"].totalPages;
          this.pages = new Array<number>(this.totalPage);
          this.prod = data;
        }, err => {
          console.log(err);
        }
      )
  }

  onDeleteProduct(p) {
    let conf = confirm("etes vous sur");
    if (conf) {
      this.catservice.deleteProduct(p._links.self.href)
        .subscribe(data => {
          this.chercherProduits();
        }, err => {
          console.log(err);
        });
    }
  }

  onEditProduct(p) {
this.router.navigateByUrl("/edit-product/"+p.id)
  }
}

