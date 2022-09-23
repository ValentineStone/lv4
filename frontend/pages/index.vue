<template>
  <div>Главная страница</div>
</template>

<script>
  export default {
    async fetch() {
    },
    head() {
      return {
        title: "Главная",
        meta: [{
          hid: 'description',
          name: 'description',
          content: 'Описание главной страницы',
        }]
      };
    }
  };
</script>

<style lang="sass">
  @import '@/assets/sass/home.sass'
</style>
