<template>
    <div class="shell">
        <layout-sidebar></layout-sidebar>
        <layout-topline></layout-topline>
        <main>
          <nuxt></nuxt>
        </main>
        <layout-footer></layout-footer>
        <informer></informer>
    </div>
</template>

<style lang="sass">
  @import '@/assets/sass/reset.sass'
  @import '@/assets/sass/master.sass'
</style>
