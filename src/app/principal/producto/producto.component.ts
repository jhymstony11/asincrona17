import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Productos } from '../lista-productos/productos';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit{

  id!: number;
  carga: boolean = false;
  datos: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router) {
    setTimeout(() => { this.carga = true}, 700)
   }

  ngOnInit() {
    let dataRuta: any = this.route.snapshot.paramMap.get('id');
    this.id = dataRuta;
    console.log(this.id);

    if (this.productos.length < this.id-1) {
      this.datos = true;
      if(this.datos){
        this.router.navigate(['/listaproductos']);
      }
    }
  }

  productos: Productos[] = [
    { codigo: 1, descripcion: 'Galletas chokis', precioCompra: 10, precioVenta: 15, ganancia: 5, existencia: 100 },
    { codigo: 2, descripcion: 'Mermelada de fresa', precioCompra: 65, precioVenta: 80, ganancia: 15, existencia: 100 },
    { codigo: 3, descripcion: 'Aceite', precioCompra: 18, precioVenta: 20, ganancia: 2, existencia: 100 },
    { codigo: 4, descripcion: 'Palomitas de maiz', precioCompra: 12, precioVenta: 15, ganancia: 3, existencia: 100 },
    { codigo: 5, descripcion: 'Doritos', precioCompra: 5, precioVenta: 8, ganancia: 3, existencia: 100 },
  ];

}
