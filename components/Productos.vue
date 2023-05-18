<script setup lang="ts">
import { Producto } from '~/models/producto.model';

interface Props {
    producto: Producto
}

const props = defineProps<Props>()
const { producto } = toRefs(props)
const { nombre, imagen, precio } = producto.value

const { obtenerProductoSeleccionado } = useCategorias()

</script>
<template>
    <div class="border p-3">
        <img :src="`/assets/img/${imagen}.jpg`" :alt="`Imagen platillo ${nombre}`" width="350" height="500" />

        <div className="p-5">
            <h3 className="text-2xl font-bold">{{ nombre }}</h3>
            <p className="mt-5 font-black text-4xl text-amber-500">
                {{ precio }}
            </p>
            <button @click="obtenerProductoSeleccionado(producto)" 
            class="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold">
                Agregar
            </button>
        </div>
    </div>
</template>

<style scoped></style>