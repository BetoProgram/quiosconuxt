<template>
    <div className="md:flex">
            <aside class="md:w-4/12 xl:w-1/4 2xl:w-1/5 py-5">
                <img
                    width="300"
                    height="100"
                    src="/assets/img/logo.svg"
                    alt="imagen logotipo"
                />
            </aside>

            <main class="md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll">
                <div class="p-10">
                    <slot />
                </div>
            </main>
      </div>
</template>