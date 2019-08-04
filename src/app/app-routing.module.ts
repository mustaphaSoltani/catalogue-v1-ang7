import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProduitsComponent } from 'src/app/produits/produits.component';
import { NewProductComponent } from 'src/app/new-product/new-product.component';
import {EditProductComponent} from "./edit-product/edit-product.component";
const routes: Routes = [
{
path:"product",component:ProduitsComponent
},
{
path:"new-product",component:NewProductComponent
},
  {
path:"edit-product/:id",component:EditProductComponent
},
{
path:"", redirectTo:"/product", pathMatch:'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
