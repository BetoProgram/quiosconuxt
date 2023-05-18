<template>
    <div class="md:flex">
        <aside class="md:w-3/12 xl:w-1/4 2xl:w-1/5">
            <SharedSidebar />
        </aside>

        <main class="md:w-9/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll">
            <div class="p-10">
                <Pasos />
                <slot />
            </div>
        </main>
    </div>
    <ModalProducto />
</template>