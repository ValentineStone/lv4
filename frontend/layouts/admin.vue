<template>
  <div class="admin_shell">
    <admin-header></admin-header>
    <b-row no-gutters>
      <b-col md="2">
        <ul class="navigate_list">
          <li class="category" v-for="cat in $store.state.navigate.adminStructure">
            <p>{{cat.name}}</p>
            <ul v-if="cat.child">
              <li class="link" v-for="item in cat.child">
                <router-link :to="item.url">{{item.name}}</router-link>
              </li>
            </ul>
          </li>
        </ul>
      </b-col>
      <b-col md="10">
        <main>
          <nuxt></nuxt>
        </main>
      </b-col>
    </b-row>
  </div>
</template>
<style lang="sass">
  @import '@/assets/sass/admin.sass'
</style>
