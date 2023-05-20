import { Categoria } from "~/models/categoria.model"
import { Producto } from '~/models/producto.model';
//import { createToast } from 'mosha-vue-toastify';
//import 'mosha-vue-toastify/dist/style.css'
import { useModalProducto } from  '@/store/modalProducto'

const categorias = ref<Categoria[]>()
const categoriaActual = ref<Categoria>()
const productoSeleccionado = ref<Producto>()
const pedido = ref<any[]>([])
const total = ref<number>(0)

export const useCategorias = () => {

    const modalStore = useModalProducto()
    const { closeModalProducto, openModalProducto } = modalStore

    const router = useRouter()

    onMounted(async() => {
        await obtenerCategorias()
    })

    watch(pedido, (currentPedido, oldPedido) => {
        const nuevoTolal = currentPedido.reduce((total, producto) => 
        (producto?.precio * producto?.cantidad) + total, 0)

        total.value = nuevoTolal
    },{immediate: true})

    /* watch(categorias, (newValue, oldValue) => 
    {
        if(newValue && newValue[0].id === 1){
            categoriaActual.value = categorias.value![0]
        }
    }) */

    const obtenerCategorias = async() => {
        const data = await $fetch<Categoria[]>('/api/get-all-categorias')
        categorias.value = data
    }

    const obtenerCategoriasId = (id:number) => {
        categoriaActual.value = categorias.value?.filter(c => c.id === id)[0]
        router.push('/')
    }

    const obtenerProductoSeleccionado = (producto:Producto) => {
        productoSeleccionado.value = producto
        openModalProducto()
    }

    const agregarPedido = ({ categoriaId, ...producto}:any) => 
    {
        var isFound = pedido.value.some((p:any) => p.id === producto.id)

        if(isFound){
            const pedidoActualizado = pedido.value.map((p:any) => p.id === producto.id ? producto : p )

            pedido.value = pedidoActualizado
            //createToast('Guardado correctamente', { type: 'success' })
        }else{
            pedido.value.push(producto)
            //createToast('Agregado al Pedido', { type: 'success' })
        }
        closeModalProducto()
    }

    const editarCantidades = (id:any) => {
        const productoActualizar = pedido.value.filter(producto => producto.id === id)
        productoSeleccionado.value = productoActualizar[0]

        openModalProducto()
    }

    const eliminarProducto = (id:any) => {
        const pedidoActualizado = pedido.value.filter(producto => producto.id !== id)
        pedido.value = pedidoActualizado
    }

    const colocarOrden = async (e:any,nombre:string) => {
        e.preventDefault();
        console.log(nombre)
        console.log(pedido.value)
        console.log(total.value)

        try{
            const data = await $fetch('/api/create-orden',{ 
                method: 'POST', 
                body : { 
                    nombre, 
                    pedido: pedido.value, 
                    total: total.value,
                    fecha: Date.now().toString()
                } 
            })

            categoriaActual.value = categorias.value![0]
            pedido.value = []
            total.value = 0

            //createToast('Pedido Realizado Correctamente', { type: 'success' })

            setTimeout(() => {
                router.push('/')
            }, 3000)

        }catch(error){
            console.log(error)
        }
    }

    return {
        categorias,
        categoriaActual,
        productoSeleccionado,
        pedido,
        total,
        //Metodos
        obtenerCategoriasId,
        obtenerProductoSeleccionado,
        agregarPedido,
        editarCantidades,
        eliminarProducto,
        colocarOrden
    } 
}