<template>
<b-container>
  <section>
    <b-row class="align-items-center" style="min-height: 100vh">
      <b-col>
        <h1>Вход в систему</h1>
      </b-col>
      <b-col>
        <b-form v-if="true">
          <b-form-group
            id="input-group-1"
            label="Почта:"
            label-for="input-1"
          >
            <b-form-input
              id="input-1"
              type="email"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-2"
            label="Пароль:"
            label-for="input-2"
          >
            <b-form-input
              id="input-2"
              type="password"
              required
            ></b-form-input>
          </b-form-group>
          <br>
          <b-button type="submit" variant="success">Вход</b-button>
          <b-button to="/" noprefetch variant="primary">На главную</b-button>
        </b-form>
      </b-col>
    </b-row>
  </section>
</b-container>
</template>
