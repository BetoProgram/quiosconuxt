export interface Producto {
    id: number
    nombre: string
    precio: number
    imagen: string
    categoriaId: number
    cantidad?:number
}