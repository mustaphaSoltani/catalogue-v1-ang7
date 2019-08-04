import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {
  host: String = "http://localhost:8080";

  constructor(private http: HttpClient) {
  }

  public getProduits(page: number, size: number) {
    return this.http.get(this.host + "/produits?page=" + page + "&size=" + size);
  }

  public getProduitsByKeyword(mc: String, page: number, size: number) {
    return this.http.get(this.host + "/produits/search/byDesignationPage?mc=" + mc + "&page=" + page + "&size=" + size);
  }

  public deleteProduct(url) {
    return this.http.delete(url);
  }

  public addProduct(url, data): Observable<Product> {
    return this.http.post<Product>(url, data);
  }

  public getRessource(url): Observable<Product> {
    return this.http.get<Product>(url);
  }
  public updateRessource(url,data){
    return this.http.put(url,data);
  }
}
