<template>
    <div class="flex justify-between mb-5">
        <NuxtLink :to="paso.url" v-for="paso in pasos" :key="paso.paso" class="text-2xl font-bold">
            {{ paso.nombre }}
        </NuxtLink>
    </div>
    <div class="bg-gray-100 mb-10">
        <div class="rounded-full bg-amber-500 text-xs leading-none h-2 text-center text-white progreso"
        :style="`width: ${calcularProgreso()}%`">

        </div>
    </div>
</template>

<script setup lang="ts">
const route = useRoute()

const pasos = [
  { paso: 1, nombre: "Menú", url: "/" },
  { paso: 2, nombre: "Resumen", url: "/resumen" },
  { paso: 3, nombre: "Datos y Total", url: "/total" },
];

const calcularProgreso = () =>{
    let valor = 0

    if(route.path === '/'){
        valor = 2
    }else if(route.path === '/resumen'){
        valor = 50
    }
    else{
        valor = 100
    }

    return valor
}
</script>

<style scoped>

</style>