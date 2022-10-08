<template>
  <section>
    <b-jumbotron header="LEVACH" lead="Добро пожаловать в панель управления" bg-variant="dark">
    </b-jumbotron>
  </section>
</template>

<script>
  export default {
    fetch ({store}) {
      store.commit('navigate/setPageName', 'Сводка')
    },
    layout: 'admin'
  }
</script>
