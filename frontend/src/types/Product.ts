export interface Product {
    id?: number;
    name: string;
    price: number;
    stock: number;
    createdAt?: string;
}

export interface CreateProductDTO {
    name: string;
    price: number;
    stock: number;
}
