<template>
    <div class="border p-10 space-y-5">
        <h3 class="text-2xl font-bold">Orden: {{ orden.id }}</h3>
        <p class="text-lg font-bold">Cliente: {{ orden.nombre }}</p>

        <div>
            <div v-for="platillo in orden.pedido" :key="platillo.id"
            class="py-3 flex border-b last-of-type:border-0 items-center">
                <div class="w-32">
                    <img  width="400" height="500" 
                    :src="`/assets/img/${platillo.imagen}.jpg`" :alt="platillo.nombre"/>
                </div>
                <div class="p-5 psace-y-2">
                    <h4 class="text-xl font-bold text-amber-500">
                        {{ platillo.nombre }}
                    </h4>
                    <p class="text-lg font-bold">
                        Cantidad: {{ platillo.cantidad }}
                    </p>
                </div>
            </div>
        </div>

        <div class="md:flex md:items-center md:justify-between my-10">
            <p class="mt-5 font-black text-4xl text-amber-500">
                Total a pagar: ${{ orden.total }}
            </p>
            <button @click="completarOrden" class="bg-indigo-600 hover:bg-indigo-800 text-white mt-5 md:0 py-3 px-10 uppercase font-bold rounded-lg">
                Completar Orden
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
const { createToast } = require('mosha-vue-toastify');
import 'mosha-vue-toastify/dist/style.css'

const props = defineProps(['orden'])
const { orden } = toRefs(props)

const completarOrden = async() => {
    try{

        await $fetch('/api/post-orden/'+orden?.value.id, { method: 'POST' })
        createToast('Orden Lista', { type: 'success' })
    }catch(error){
        createToast('Hubo un error', { type: 'danger' })
    }

}

</script>