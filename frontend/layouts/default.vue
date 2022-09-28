<template>
  <div class="shell">
    <navbar></navbar>
    <div class="container max">
      <div class="row">
        <div class="col-lg-3">
          <left-navigation></left-navigation>
        </div>
        <div class="col-lg-8">
          <main>
            <nuxt></nuxt>
          </main>
        </div>
        <div class="col-lg-1"></div>
      </div>
    </div>
      <!--        <informer></informer>-->
  </div>
</template>

<style lang="sass">
  @import '@/assets/sass/reset.sass'
  @import '@/assets/sass/master.sass'
</style>
