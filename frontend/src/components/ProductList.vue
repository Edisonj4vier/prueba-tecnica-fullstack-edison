<template>
    <div class="product-list">
    <h2>Listado de Productos</h2>
    
    <div v-if="loading" class="loading">Cargando productos...</div>
    
    <div v-else-if="error" class="error">{{ error }}</div>
    
    <table v-else-if="products.length > 0" class="products-table">
        <thead>
        <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Fecha de Creación</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="product in products" :key="product.id">
            <td>{{ product.id }}</td>
            <td>{{ product.name }}</td>
            <td>${{ product.price.toFixed(2) }}</td>
            <td>{{ product.stock }}</td>
            <td>{{ formatDate(product.createdAt) }}</td>
        </tr>
        </tbody>
    </table>
    
    <div v-else class="no-products">
        No hay productos registrados. ¡Crea uno!
    </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import type { Product } from '@/types/Product';
import { productService } from '@/services/ProductService';

const products = ref<Product[]>([]);
const loading = ref(false);
const error = ref<string | null>(null);

const loadProducts = async () => {
    loading.value = true;
    error.value = null;

    try {
    products.value = await productService.getAllProducts();
    } catch (err) {
    error.value = 'Error al cargar los productos';
    console.error(err);
    } finally {
    loading.value = false;
    }
};

const formatDate = (dateString?: string) => {
    if (!dateString) return '-';
    return new Date(dateString).toLocaleString('es-ES');
};

onMounted(() => {
    loadProducts();
});

defineExpose({ loadProducts });
</script>
