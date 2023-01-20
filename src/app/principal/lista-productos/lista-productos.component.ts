import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Productos } from './productos';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent {

  
  constructor(private router: Router){}
  productos: Productos[] = [
    { codigo: 1, descripcion: 'Galletas chokis', precioCompra: 10, precioVenta: 15, ganancia: 5, existencia: 100 },
    { codigo: 2, descripcion: 'Mermelada de fresa', precioCompra: 65, precioVenta: 80, ganancia: 15, existencia: 100 },
    { codigo: 3, descripcion: 'Aceite', precioCompra: 18, precioVenta: 20, ganancia: 2, existencia: 100 },
    { codigo: 4, descripcion: 'Palomitas de maiz', precioCompra: 12, precioVenta: 15, ganancia: 3, existencia: 100 },
    { codigo: 5, descripcion: 'Doritos', precioCompra: 5, precioVenta: 8, ganancia: 3, existencia: 100 },
  ];

  visualizarProducto(id: number){
    this.router.navigate([`/producto/${id}`]);
    
  }
}
