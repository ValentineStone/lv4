<template>
  <section>
    <b-navbar toggleable="lg" type="dark" variant="dark" sticky>
        <b-navbar-brand>{{$store.state.navigate.adminPageName}}</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-button-group size="sm">
              <b-button to="/admin/profile/" variant="info">Профиль</b-button>
              <b-button to="/admin/" variant="warning">Выйти из системы</b-button>
            </b-button-group>
          </b-navbar-nav>
        </b-collapse>
    </b-navbar>
  </section>
</template>
