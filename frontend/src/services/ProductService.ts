import type { CreateProductDTO, Product } from "@/types/Product";

const API_URL = 'http://localhost:8080/api/products';

export const productService = {
    async getAllProducts(): Promise<Product[]> {
        try {
            const response = await fetch(API_URL);
            if (!response.ok) {
                throw new Error('Error al obtener productos');
            }
            return await response.json();
        } catch (error) {
            console.error('Error: ', error);
            throw error;
        }
    },

    async createProduct(product: CreateProductDTO): Promise<Product> {
        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(product),
            });

            if (!response.ok) {
                throw new Error('Error al crear producto')
            }
            return await response.json();
        }catch (error){
            console.error('Error: ', error);
            throw error;
        }
    },
};
