<template>
    <div class="product-form">
    <h2>Crear Producto</h2>
    
    <form @submit.prevent="handleSubmit">
        <div class="form-group">
        <label for="name">Nombre:</label>
        <input
            id="name"
            v-model="form.name"
            type="text"
            required
            placeholder="Ingrese el nombre del producto"
        />
        </div>

        <div class="form-group">
        <label for="price">Precio:</label>
        <input
            id="price"
            v-model.number="form.price"
            type="number"
            step="0.01"
            min="0.01"
            required
            placeholder="0.00"
        />
        </div>

        <div class="form-group">
        <label for="stock">Stock:</label>
        <input
            id="stock"
            v-model.number="form.stock"
            type="number"
            min="0"
            required
            placeholder="0"
        />
        </div>

        <div v-if="error" class="error-message">{{ error }}</div>

        <div v-if="success" class="success-message">
        ¡Producto creado exitosamente!
        </div>

        <button type="submit" :disabled="loading" class="submit-btn">
        {{ loading ? 'Guardando...' : 'Crear Producto' }}
        </button>
    </form>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import type { CreateProductDTO } from '@/types/Product';
import { productService } from '@/services/ProductService';

const emit = defineEmits<{
    productCreated: [];
}>();

const form = reactive<CreateProductDTO>({
    name: '',
    price: 0,
    stock: 0,
});

const loading = ref(false);
const error = ref<string | null>(null);
const success = ref(false);

const resetForm = () => {
    form.name = '';
    form.price = 0;
    form.stock = 0;
};

const handleSubmit = async () => {
    loading.value = true;
    error.value = null;
    success.value = false;

    try {
    await productService.createProduct(form);
    success.value = true;
    resetForm();
    emit('productCreated');
    
    setTimeout(() => {
        success.value = false;
    }, 3000);
    } catch (err) {
    error.value = 'Error al crear el producto. Intente nuevamente.';
    console.error(err);
    } finally {
    loading.value = false;
    }
};
</script>
