export interface Product {
    codigo: number;
    nombre: string;
    descripcion: string;
    cantidad: number;
    creacion: string; 
    destacado?: boolean;
    imagen?: string | null | undefined; 
}
