<template>
  <admin-category-list></admin-category-list>
</template>

<script>
  export default {
    async fetch ({store}) {
      await store.dispatch('news/getCategories');
      await store.commit('navigate/setPageName', store.state.news.categories.parent.name)
    },
    layout: 'admin'
  }
</script>
