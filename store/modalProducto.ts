import { defineStore } from "pinia";

export const useModalProducto = defineStore('modalStore', () => {
    const isOpenModal = ref(false)

    const closeModalProducto = () => isOpenModal.value = false
    const openModalProducto = () => isOpenModal.value = true

    return { isOpenModal, closeModalProducto, openModalProducto }
})