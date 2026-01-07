<template>
  <div id="app">
    <header>
      <h1>📦 Gestión de Productos</h1>
    </header>
    
    <main class="container">
      <ProductForm @product-created="handleProductCreated" />
      <ProductList ref="productListRef" />
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ProductForm from './components/ProductForm.vue';
import ProductList from './components/ProductList.vue';

const productListRef = ref<InstanceType<typeof ProductList> | null>(null);

const handleProductCreated = () => {
  productListRef.value?.loadProducts();
};
</script>
