<script setup lang="ts">

const { categoriaActual } = useCategorias()

</script>

<template>
    <h1 class="text-4xl font-black">{{ categoriaActual?.nombre }}</h1>
    <p class="text-2xl my-10">
        Elige y personaliza tu pedido a continuación
    </p>
    <div class="grid gap-3 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        <Productos v-for="producto in categoriaActual?.productos" 
        :key="producto.id" :producto="producto" />
    </div>
</template>
<style scoped>

</style>