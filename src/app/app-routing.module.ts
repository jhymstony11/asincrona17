import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './principal/header/header.component';
import { ListaProductosComponent } from './principal/lista-productos/lista-productos.component';
import { ProductoComponent } from './principal/producto/producto.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HeaderComponent},
  {path: 'listaproductos', component: ListaProductosComponent},
  {path: 'producto/:id', component: ProductoComponent},
  {path: 'listaproductos/:**', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', redirectTo: '/home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
