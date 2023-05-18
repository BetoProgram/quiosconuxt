<template>
    <h1 class="text-4xl font-black">Resumen</h1>
    <p class="text-2xl my-10">Revisa tu Pedido</p>

    <p v-if="pedido.length === 0" class="text-center text-2xl">
        No hay elementos en tu pedido
    </p>
    <ResumenProducto esle v-for="ped in pedido" :key="ped.id" :producto="ped" />
</template>

<script setup lang="ts">
const { pedido } = useCategorias()

</script>

<style scoped>

</style>