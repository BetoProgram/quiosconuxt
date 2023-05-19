<template>
    <h1 class="text-4xl font-black">Total y Confirmar Pedido</h1>
    <p class="text-2xl my-10">Confirma tu Pedido a Continuación</p>

    <form @submit="colocarOrden($event, nombre)">
        <div>
            <label for="nombre" class="block uppercase text-slate-800 font-bold text-xl">
                Nombre
            </label>
            <input id="nombre" class="bg-gray-200 w-full lg:w-1/3 mt-3 p-2 rounded-md"
            type="text" v-model="nombre" />
        </div>

        <div class="mt-10">
          <p class="text-2xl">
            Total a pagar:
            <span class="font-bold">${{ total }}</span>
          </p>
        </div>

        <div class="mt-5">
          <input
            type="submit"
            :class="`${isValid ? 'bg-indigo-100': 'bg-indigo-600 hover:bg-indigo-800'} w-full lg:w-auto px-5 py-2 rounded uppercase font-bold text-white text-center`"
            value="Confirmar Pedido"
            :disabled="isValid"
          />
        </div>
    </form>
</template>

<script setup lang="ts">
const { pedido, colocarOrden, total } = useCategorias()
const isValid = ref(false)
const nombre = ref('')

watch([pedido, nombre], (currentValue, oldValue) => {
    //console.log(currentValue)
    const ped = currentValue[0]
    const nom = currentValue[1]

    if(ped.length === 0 || nom === '' || nom.length < 3){
        isValid.value = true
    }else{
        isValid.value = false
    }
},{immediate: true})

</script>

<style scoped>

</style>