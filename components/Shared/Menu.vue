<script setup lang="ts">
import { Categoria } from '~/models/categoria.model';

interface Props {
    categoria: Categoria
}

const props = defineProps<Props>()
const { categoria } = toRefs(props)
const { id, nombre, icono } = categoria.value

const { categoriaActual, obtenerCategoriasId } = useCategorias()

</script>
<template>
    <div :class="`${categoriaActual?.id === id ? 'bg-amber-400' : '' } flex items-center gap-4 w-full border p-5 hover:bg-amber-400`">
        <img width="70" height="70" :src="`/assets/img/icono_${icono}.svg`" alt="Imagen icono" />
        <button class="text-2xl font-bold hover:cursor-pointer" 
        @click="obtenerCategoriasId(id)">{{ nombre }}</button>
    </div>
</template>


<style scoped></style>