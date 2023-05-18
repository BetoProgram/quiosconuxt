<template>
    <div class="shadow p-5 mb-3 flex gap-10 items-center">
        <div class="md:w-1/6">
            <img width="300" height="400" 
            :alt="`Imagen producto ${producto.nombre}`"
            :src="`/assets/img/${producto.imagen}.jpg`" />
        </div>

        <div class="md:w-4/6">
            <p class="text-3xl font-bold">{{producto.nombre}}</p>
            <p class="text-xl font-bold mt-2">Cantidad: {{producto.cantidad}}</p>
            <p class="text-xl font-bold text-amber-500 mt-2">
                Precio: ${{producto.precio}}
            </p>

            <p class="text-sm text-gray-700 mt-2">
                Subtotal: ${{producto.precio * producto.cantidad}}
            </p>
      </div>

      <div>
        <button
          type="button"
          class="bg-sky-700 flex gap-2 px-5 py-2 text-white rounded-md font-bold uppercase shadow-md w-full text-center"
          @click="editarCantidades(producto.id)"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
          </svg>
          Editar
        </button>

        <button
          type="button"
          class="bg-red-700 flex gap-2  px-5 py-2 text-white rounded-md font-bold uppercase shadow-md w-full text-center mt-3"
          @click="eliminarProducto(producto.id)"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
          Eliminar
        </button>
      </div>
    </div>
</template>

<script setup lang="ts">
const { editarCantidades, eliminarProducto } = useCategorias()
const props = defineProps(['producto'])
const { producto } = toRefs(props)

</script>

<style scoped>

</style>