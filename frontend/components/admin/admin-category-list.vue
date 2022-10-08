<template>
  <section>
    <b-container fluid>
      <b-row class="py-2">
        <b-col md="11">
          <h4>
            {{$store.state.news.categories.parent.name}}
            <b-badge>
              {{$store.state.news.categories.count}}
              {{$store.getters['core/declOfNum']({number: $store.state.news.categories.count, words: ['элемент', 'элемента','элементов']})}}
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
      :items="$store.state.news.categories.list"
      :fields="fields"
      :dark="true"
      head-variant="dark"
      :hover="true"
      :responsive="true"
    >
      <template #cell(actions)="data">
        <b-navbar-nav class="ml-auto">
          <b-button-group size="sm">
            <b-button variant="info" :to="`/admin/news${data.item.url}`">
              В раздел
            </b-button>
            <b-button variant="warning">
              Настройки
            </b-button>
            <b-button variant="danger">
              Удалить
            </b-button>
          </b-button-group>
        </b-navbar-nav>
      </template>
    </b-table>
  </section>
</template>

<script>
  export default {
    data () {
      return {
        fields: [
          {
            key: 'name',
            label: 'Название',
            sortable: true
          },
          {
            key: 'code',
            label: 'Символьный код',
            sortable: true
          },
          {
            key: 'count',
            label: 'Публикаций',
            sortable: true
          },
          {
            key: 'actions',
            label: '',
          },
        ]
      }
    }
  }
</script>

