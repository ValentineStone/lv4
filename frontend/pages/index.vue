<template>
  <section>
    Рабочая область
  </section>
</template>

<script>
  export default {
    async fetch({store}) {
      await store.dispatch('navigate/getNavigate');
    },
  }
</script>

<style lang="css">
  @import url('https://rsms.me/inter/inter.css');
  * { font-family: 'Inter', sans-serif; }
  @supports (font-variation-settings: normal) {
  * { font-family: 'Inter var', sans-serif; }
}
</style>
