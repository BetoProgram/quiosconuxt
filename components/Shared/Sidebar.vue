<script setup lang="ts">
const { categorias } = useCategorias()
</script>

<template>
    <img src="/assets/img/logo.svg" width="300" height="100" alt="imagen logotipo" />
    <nav class="mt-10">
        <SharedMenu v-for="categoria in categorias" :key="categoria.id" :categoria="categoria"  />
    </nav>
</template>