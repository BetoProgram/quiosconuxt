import { Producto } from "./producto.model"

export interface Categoria {
    id:number
    nombre: string
    icono: string
    productos: Producto[]
}