<template>
  <TransitionRoot appear :show="isOpenModal" as="template">
    <Dialog @close="closeModalProducto" class="w-10 relative z-10">
      <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100"
        leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-black bg-opacity-25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex min-h-full items-center justify-center p-4 text-center">
          <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95">
            <DialogPanel
              class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
              <!-- <DialogTitle
                  as="h3"
                  class="text-lg font-medium leading-6 text-gray-900"
                >
                  {{ productoSeleccionado?.nombre }}
                </DialogTitle> -->
              <div class="mt-2 flex">
                <div class="md:w-1/3">
                  <img :src="`/assets/img/${productoSeleccionado?.imagen}.jpg`" />
                </div>

                <div class="ml-6 md:w-2/3">
                  <h1 className="text-3xl font-bold">{{ productoSeleccionado?.nombre }}</h1>
                  <p className="mt-5 font-black text-5xl text-amber-500">
                    ${{ productoSeleccionado?.precio }}
                  </p>

                  <div className="flex gap-4 mt-5">
                    <button type="button" @click="cantidad <= 1 ? 0 : cantidad--">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-7 h-7">
                        <path stroke-linecap="round" stroke-linejoin="round"
                          d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>

                    </button>
                    <p class="text-2xl">{{ cantidad }}</p>

                    <button type="button" @click="cantidad >= 9 ? 0 : cantidad++">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-7 h-7">
                        <path stroke-linecap="round" stroke-linejoin="round"
                          d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </button>
                  </div>
                  <button
                  type="button"
                  class="bg-indigo-600 hover:bg-indigo-800 px-5 py-2 mt-5 text-white font-bold uppercase rounded"
                  @click="agregarPedido({ ...productoSeleccionado, cantidad })">
                  {{ isEdited ? "Guardar Cambios" : "Añadir Carrito" }}
                  </button>
                </div>
              </div>

              <div class="mt-4">
                <button type="button" class="inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 
                    text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus-visible:ring-2 
                    focus-visible:ring-blue-500 focus-visible:ring-offset-2" @click="closeModalProducto">
                  Cerrar
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
  
<script setup lang="ts">
import { storeToRefs } from 'pinia'
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/vue'
import { useModalProducto } from  '@/store/modalProducto'

const { productoSeleccionado,pedido, agregarPedido } = useCategorias()
const cantidad = ref<number>(1)
const isEdited = ref<boolean>(false)

const modalStore = useModalProducto()
const { closeModalProducto } = modalStore
const { isOpenModal } = storeToRefs(modalStore)

watch([pedido, productoSeleccionado], (current, oldValue) => {
  const pedidoWatch = current[0]
  const productoWatch = current[1]

  if(pedidoWatch.some((pedidoSt:any) => pedidoSt.id === productoWatch?.id)){
      const productoEditado = pedidoWatch.find((pedidoSt:any) => pedidoSt.id === productoWatch?.id)
      isEdited.value = true
      cantidad.value = productoEditado.cantidad
  }else{
    isEdited.value = false
    cantidad.value = 1
  }
},{deep:true})

</script>
<style scoped>
.size-box {
  width: 800px !important;
}
</style>
  