<template>
  <section>
    <b-container fluid>
      <b-row class="py-2">
        <b-col md="11">
          <h4>
            {{$store.state.news.categories.parent.name}}
            <b-badge>
              {{$store.state.news.news.count}}
              {{$store.getters['core/declOfNum']({number: $store.state.news.news.count, words: ['элемент', 'элемента','элементов']})}}
            </b-badge>
          </h4>
        </b-col>
        <b-col md="1">
          <b-button variant="info" to="/admin/news/">
            < Назад
          </b-button>
        </b-col>
      </b-row>
    </b-container>
    <b-table
      striped
      hover
      :items="list"
      :fields="fields"
      :dark="true"
      head-variant="dark"
      :hover="true"
      :responsive="true"
      small
    >
      <template #cell(author)="data">
        <b-row class="d-flex" v-if="data.item.author">
          <b-avatar class="mr-1" size="1.4rem" :src="data.item.author.image"></b-avatar>
          <span>{{data.item.author.name}} <b-badge>{{data.item.author.rate}}</b-badge></span>
        </b-row>
        <b-row class="d-flex" v-else>
          <b-avatar class="mr-1" size="1.4rem"></b-avatar>
          <span>Аноним</span>
        </b-row>
      </template>
      <template #cell(actions)="actionsData">
        <b-navbar-nav class="ml-auto">
          <b-button-group size="sm">
            <b-button variant="warning" @click="actionsData.toggleDetails">
              Детали
            </b-button>
<!--            <b-button variant="info" :to="`/admin/news${data.item.url}`" target="_blank">-->
<!--              Читать-->
<!--            </b-button>-->
<!--            <b-button variant="danger">-->
<!--              Удалить-->
<!--            </b-button>-->
          </b-button-group>
        </b-navbar-nav>
      </template>

      <template #row-details="actionsData">
        <b-card>
          <b-row class="mb-2">
            <b-col sm="3" class="text-sm-right"><b>Age:</b></b-col>
            <b-col>{{ actionsData.item.short }}</b-col>
          </b-row>
        </b-card>
      </template>
    </b-table>
    <b-pagination-nav
      :link-gen="linkGen"
      :number-of-pages="10"
      use-router
      align="center"
      variant="dark"
    >
    </b-pagination-nav>
  </section>
</template>

<script>
  export default {
    created() {
      this.list = this.list.concat(this.$store.state.news.news.list);
    },
    data () {
      return {
        list: [],
        fields: [
          {
            key: 'id',
            label: 'ID'
          },
          {
            key: 'name',
            label: 'Название',
            sortable: true
          },
          {
            key: 'comments_counts',
            label: 'Комментариев',
            sortable: true
          },
          {
            key: 'rate',
            label: 'Рейтинг',
            sortable: true
          },
          {
            key: 'author',
            label: 'Автор'
          },
          {
            key: 'actions',
            label: '',
          },
        ]
      }
    },
    methods: {
      linkGen(pageNum) {
        return pageNum === 1 ? '?' : `?page=${pageNum}`
      }
    }
  }
</script>

