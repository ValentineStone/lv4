<template>
  <admin-news-list></admin-news-list>
</template>

<script>
  export default {
    async fetch ({store}) {
      await store.dispatch('news/getCategories');
      await store.dispatch('news/getNews');
      await store.commit('navigate/setPageName', store.state.news.categories.parent.name)
    },
    layout: 'admin'
  }
</script>
