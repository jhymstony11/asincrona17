export class Productos {

    public codigo: number;
    public descripcion: string;
    public precioCompra: number;
    public precioVenta: number;
    public ganancia: number;
    public existencia: number;
 

    constructor(codigo: number, descripcion: string, precioCompra: number, precioVenta: number, ganancia: number, existencia: number) {
        this.codigo = codigo;
        this.descripcion = descripcion;
        this.precioCompra = precioCompra;
        this.precioVenta = precioVenta;
        this.ganancia = ganancia;
        this.existencia = existencia;
    }
}