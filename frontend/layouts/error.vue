<template>
  <section>
    Error 404
  </section>
</template>

<script>
  export default {
    head() {
      return {
        title: 'Ошибка 404',
        meta: [{
          hid: 'description',
          name: 'description',
          content: 'Раздел не найден',
        }]
      };
    },
    layout: 'clear'
  }
</script>

