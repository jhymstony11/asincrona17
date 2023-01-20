import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { AppRoutingModule } from '../app-routing.module';
import { ProductoComponent } from './producto/producto.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    MenuComponent,
    ListaProductosComponent,
    ProductoComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ], 
  exports:  [
    MenuComponent,
    ListaProductosComponent,
    ProductoComponent,
    HeaderComponent
  ]
})
export class PrincipalModule { }
